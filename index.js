function produceDrivingRange(range) {
    return function(string1, string2) {
      let start = parseInt(string1)
      let finish = parseInt(string2)
      let diff = Math.abs(start-finish)
      if(diff > range) {
        return `${diff-range} blocks out of range`
      } else {
        return `within range by ${range-diff}`
      }
    }
}
