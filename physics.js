function getAcceleration(newton){
    if (typeof(newton.f)==='number' && typeof(newton.m)==='number'){
        return newton.f/newton.m
    }
    if (typeof(newton.Δv)==='number' && typeof(newton.Δt)==='number'){
        return newton.Δv/newton.Δt
    }
    if (typeof(newton.d)==='number' && typeof(newton.t)==='number'){
        return (2*newton.d)/(newton.t * newton.t)
    }
    
    return "impossible"   
}