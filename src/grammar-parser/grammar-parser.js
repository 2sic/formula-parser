/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var grammarParser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,8],$V2=[1,6],$V3=[1,7],$V4=[1,9],$V5=[1,19],$V6=[1,20],$V7=[1,14],$V8=[1,15],$V9=[1,16],$Va=[1,12],$Vb=[1,13],$Vc=[1,18],$Vd=[1,22],$Ve=[1,23],$Vf=[1,24],$Vg=[1,25],$Vh=[1,26],$Vi=[1,27],$Vj=[1,28],$Vk=[1,29],$Vl=[1,30],$Vm=[1,31],$Vn=[1,32],$Vo=[5,7,10,11,12,14,15,16,17,18,19,20,21,33,34],$Vp=[5,10,11,12,14,15,16,17,18,19,20,21,33,34],$Vq=[5,7,10,11,12,14,15,16,17,18,19,20,21,33,34,36],$Vr=[28,29,30],$Vs=[5,11,12,14,15,16,17,18,33,34],$Vt=[5,11,14,15,16,17,33,34],$Vu=[5,11,12,14,15,16,17,18,19,20,33,34],$Vv=[14,33,34];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"expression":4,"EOF":5,"variableSequence":6,"%":7,"number":8,"STRING":9,"&":10,"=":11,"+":12,"(":13,")":14,"<":15,">":16,"NOT":17,"-":18,"*":19,"/":20,"^":21,"FUNCTION":22,"expseq":23,"cell":24,"sheetName":25,"SHEET_NAME":26,"SHEET_NAME_IN_QUOTES":27,"ABSOLUTE_CELL":28,"RELATIVE_CELL":29,"MIXED_CELL":30,":":31,"ARRAY":32,";":33,",":34,"VARIABLE":35,"DECIMAL":36,"NUMBER":37,"ERROR":38,"$accept":0,"$end":1},
terminals_: {5:"EOF",7:"%",9:"STRING",10:"&",11:"=",12:"+",13:"(",14:")",15:"<",16:">",17:"NOT",18:"-",19:"*",20:"/",21:"^",22:"FUNCTION",26:"SHEET_NAME",27:"SHEET_NAME_IN_QUOTES",28:"ABSOLUTE_CELL",29:"RELATIVE_CELL",30:"MIXED_CELL",31:":",32:"ARRAY",33:";",34:",",35:"VARIABLE",36:"DECIMAL",37:"NUMBER",38:"ERROR"},
productions_: [0,[3,2],[4,1],[4,2],[4,1],[4,1],[4,3],[4,3],[4,3],[4,3],[4,4],[4,4],[4,4],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,2],[4,3],[4,4],[4,1],[4,1],[4,2],[25,1],[25,1],[24,1],[24,1],[24,1],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,2],[24,2],[24,2],[24,4],[24,4],[24,4],[24,4],[24,4],[24,4],[24,4],[24,4],[24,4],[23,1],[23,1],[23,3],[23,3],[6,1],[6,3],[8,1],[8,3],[8,2],[2,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

      return $$[$0-1];

break;
case 2:

      this.$ = yy.callVariable($$[$0][0]);

break;
case 3:

      this.$ = yy.toNumber($$[$0-1]) * 0.01;

break;
case 4:

      this.$ = yy.toNumber($$[$0]);

break;
case 5:

      this.$ = yy.trimEdges($$[$0]);

break;
case 6:

      this.$ = yy.evaluateByOperator('&', [$$[$0-2], $$[$0]]);

break;
case 7:

      this.$ = yy.evaluateByOperator('=', [$$[$0-2], $$[$0]]);

break;
case 8:

      this.$ = yy.evaluateByOperator('+', [$$[$0-2], $$[$0]]);

break;
case 9:

      this.$ = $$[$0-1];

break;
case 10:

      this.$ = yy.evaluateByOperator('<=', [$$[$0-3], $$[$0]]);

break;
case 11:

      this.$ = yy.evaluateByOperator('>=', [$$[$0-3], $$[$0]]);

break;
case 12:

      this.$ = yy.evaluateByOperator('<>', [$$[$0-3], $$[$0]]);

break;
case 13:

      this.$ = yy.evaluateByOperator('NOT', [$$[$0-2], $$[$0]]);

break;
case 14:

      this.$ = yy.evaluateByOperator('>', [$$[$0-2], $$[$0]]);

break;
case 15:

      this.$ = yy.evaluateByOperator('<', [$$[$0-2], $$[$0]]);

break;
case 16:

      this.$ = yy.evaluateByOperator('-', [$$[$0-2], $$[$0]]);

break;
case 17:

      this.$ = yy.evaluateByOperator('*', [$$[$0-2], $$[$0]]);

break;
case 18:

      this.$ = yy.evaluateByOperator('/', [$$[$0-2], $$[$0]]);

break;
case 19:

      this.$ = yy.evaluateByOperator('^', [$$[$0-2], $$[$0]]);

break;
case 20:

      var n1 = yy.invertNumber($$[$0]);

      this.$ = n1;

      if (isNaN(this.$)) {
          this.$ = 0;
      }

break;
case 21:

      var n1 = yy.toNumber($$[$0]);

      this.$ = n1;

      if (isNaN(this.$)) {
          this.$ = 0;
      }

break;
case 22:

      this.$ = yy.callFunction($$[$0-2]);

break;
case 23:

      this.$ = yy.callFunction($$[$0-3], $$[$0-1]);

break;
case 27: case 59:

      this.$ = $$[$0];

break;
case 28:

    this.$ = $$[$0];

break;
case 29: case 30: case 31:

      this.$ = yy.cellValue($$[$0]);

break;
case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 40:

      this.$ = yy.rangeValue($$[$0-2], $$[$0]);

break;
case 41: case 42: case 43:

      this.$ = yy.cellValue($$[$0], $$[$0-1]);

break;
case 44: case 45: case 46: case 47: case 48: case 49: case 50: case 51: case 52:

      this.$ = yy.rangeValue($$[$0-2], $$[$0], $$[$0-3]);

break;
case 53: case 57:

      this.$ = [$$[$0]];

break;
case 54:

      var result = [];
      var arr = eval("[" + yytext + "]");

      arr.forEach(function(item) {
        result.push(item);
      });

      this.$ = result;

break;
case 55: case 56:

      $$[$0-2].push($$[$0]);
      this.$ = $$[$0-2];

break;
case 58:

      this.$ = (Array.isArray($$[$0-2]) ? $$[$0-2] : [$$[$0-2]]);
      this.$.push($$[$0]);

break;
case 60:

      this.$ = ($$[$0-2] + '.' + $$[$0]) * 1;

break;
case 61:

      this.$ = $$[$0-1] * 0.01;

break;
case 62:

      this.$ = yy.throwError($$[$0]);

break;
}
},
table: [{2:11,3:1,4:2,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{1:[3]},{5:[1,21],7:$Vd,10:$Ve,11:$Vf,12:$Vg,15:$Vh,16:$Vi,17:$Vj,18:$Vk,19:$Vl,20:$Vm,21:$Vn},o($Vo,[2,2],{36:[1,33]}),o($Vp,[2,4],{7:[1,34]}),o($Vo,[2,5]),{2:11,4:35,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{2:11,4:36,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{2:11,4:37,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{13:[1,38]},o($Vo,[2,24]),o($Vo,[2,25],{2:39,38:$Vc}),o($Vq,[2,57]),o($Vo,[2,59],{36:[1,40]}),o($Vo,[2,29],{31:[1,41]}),o($Vo,[2,30],{31:[1,42]}),o($Vo,[2,31],{31:[1,43]}),{28:[1,44],29:[1,45],30:[1,46]},o([5,7,10,11,12,14,15,16,17,18,19,20,21,33,34,38],[2,62]),o($Vr,[2,27]),o($Vr,[2,28]),{1:[2,1]},o($Vo,[2,3]),{2:11,4:47,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{2:11,4:48,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{2:11,4:49,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{2:11,4:52,6:3,8:4,9:$V0,11:[1,50],12:$V1,13:$V2,16:[1,51],18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{2:11,4:54,6:3,8:4,9:$V0,11:[1,53],12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{2:11,4:55,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{2:11,4:56,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{2:11,4:57,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{2:11,4:58,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{2:11,4:59,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{35:[1,60]},o($Vo,[2,61]),{7:$Vd,10:$Ve,11:$Vf,12:$Vg,14:[1,61],15:$Vh,16:$Vi,17:$Vj,18:$Vk,19:$Vl,20:$Vm,21:$Vn},o($Vs,[2,20],{7:$Vd,10:$Ve,19:$Vl,20:$Vm,21:$Vn}),o($Vs,[2,21],{7:$Vd,10:$Ve,19:$Vl,20:$Vm,21:$Vn}),{2:11,4:64,6:3,8:4,9:$V0,12:$V1,13:$V2,14:[1,62],18:$V3,22:$V4,23:63,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,32:[1,65],35:$Va,37:$Vb,38:$Vc},o($Vo,[2,26]),{37:[1,66]},{28:[1,67],29:[1,68],30:[1,69]},{28:[1,70],29:[1,71],30:[1,72]},{28:[1,73],29:[1,74],30:[1,75]},o($Vo,[2,41],{31:[1,76]}),o($Vo,[2,42],{31:[1,77]}),o($Vo,[2,43],{31:[1,78]}),o($Vp,[2,6],{7:$Vd}),o([5,11,14,33,34],[2,7],{7:$Vd,10:$Ve,12:$Vg,15:$Vh,16:$Vi,17:$Vj,18:$Vk,19:$Vl,20:$Vm,21:$Vn}),o($Vs,[2,8],{7:$Vd,10:$Ve,19:$Vl,20:$Vm,21:$Vn}),{2:11,4:79,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{2:11,4:80,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},o($Vt,[2,15],{7:$Vd,10:$Ve,12:$Vg,18:$Vk,19:$Vl,20:$Vm,21:$Vn}),{2:11,4:81,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},o($Vt,[2,14],{7:$Vd,10:$Ve,12:$Vg,18:$Vk,19:$Vl,20:$Vm,21:$Vn}),o([5,11,14,17,33,34],[2,13],{7:$Vd,10:$Ve,12:$Vg,15:$Vh,16:$Vi,18:$Vk,19:$Vl,20:$Vm,21:$Vn}),o($Vs,[2,16],{7:$Vd,10:$Ve,19:$Vl,20:$Vm,21:$Vn}),o($Vu,[2,17],{7:$Vd,10:$Ve,21:$Vn}),o($Vu,[2,18],{7:$Vd,10:$Ve,21:$Vn}),o([5,11,12,14,15,16,17,18,19,20,21,33,34],[2,19],{7:$Vd,10:$Ve}),o($Vq,[2,58]),o($Vo,[2,9]),o($Vo,[2,22]),{14:[1,82],33:[1,83],34:[1,84]},o($Vv,[2,53],{7:$Vd,10:$Ve,11:$Vf,12:$Vg,15:$Vh,16:$Vi,17:$Vj,18:$Vk,19:$Vl,20:$Vm,21:$Vn}),o($Vv,[2,54]),o($Vo,[2,60]),o($Vo,[2,32]),o($Vo,[2,33]),o($Vo,[2,34]),o($Vo,[2,35]),o($Vo,[2,36]),o($Vo,[2,37]),o($Vo,[2,38]),o($Vo,[2,39]),o($Vo,[2,40]),{28:[1,85],29:[1,86],30:[1,87]},{28:[1,88],29:[1,89],30:[1,90]},{28:[1,91],29:[1,92],30:[1,93]},o($Vt,[2,10],{7:$Vd,10:$Ve,12:$Vg,18:$Vk,19:$Vl,20:$Vm,21:$Vn}),o($Vt,[2,12],{7:$Vd,10:$Ve,12:$Vg,18:$Vk,19:$Vl,20:$Vm,21:$Vn}),o($Vt,[2,11],{7:$Vd,10:$Ve,12:$Vg,18:$Vk,19:$Vl,20:$Vm,21:$Vn}),o($Vo,[2,23]),{2:11,4:94,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},{2:11,4:95,6:3,8:4,9:$V0,12:$V1,13:$V2,18:$V3,22:$V4,24:10,25:17,26:$V5,27:$V6,28:$V7,29:$V8,30:$V9,35:$Va,37:$Vb,38:$Vc},o($Vo,[2,44]),o($Vo,[2,45]),o($Vo,[2,46]),o($Vo,[2,47]),o($Vo,[2,48]),o($Vo,[2,49]),o($Vo,[2,50]),o($Vo,[2,51]),o($Vo,[2,52]),o($Vv,[2,55],{7:$Vd,10:$Ve,11:$Vf,12:$Vg,15:$Vh,16:$Vi,17:$Vj,18:$Vk,19:$Vl,20:$Vm,21:$Vn}),o($Vv,[2,56],{7:$Vd,10:$Ve,11:$Vf,12:$Vg,15:$Vh,16:$Vi,17:$Vj,18:$Vk,19:$Vl,20:$Vm,21:$Vn})],
defaultActions: {21:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch) console.log('tempMatch ' + tempMatch[0]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 9;
break;
case 2:return 9;
break;
case 3:return 22;
break;
case 4:return 38;
break;
case 5:return 28;
break;
case 6:return 26;
break;
case 7:return 27;
break;
case 8:return 30;
break;
case 9:return 30;
break;
case 10:return 29;
break;
case 11:return 22;
break;
case 12:return 35;
break;
case 13:return 35;
break;
case 14:return 37;
break;
case 15:return 32;
break;
case 16:return 10;
break;
case 17:return ' ';
break;
case 18:return 36;
break;
case 19:return 31;
break;
case 20:return 33;
break;
case 21:return 34;
break;
case 22:return 19;
break;
case 23:return 20;
break;
case 24:return 18;
break;
case 25:return 12;
break;
case 26:return 21;
break;
case 27:return 13;
break;
case 28:return 14;
break;
case 29:return 16;
break;
case 30:return 15;
break;
case 31:return 17;
break;
case 32:return '"';
break;
case 33:return "'";
break;
case 34:return "!";
break;
case 35:return 11;
break;
case 36:return 7;
break;
case 37:return '#';
break;
case 38:return 5;
break;
}
},
rules: [/^(?:\s+)/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:[A-Za-z]{1,}[A-Za-z_0-9\.]+(?=[(]))/,/^(?:#[A-Z0-9\/]+(!|\?)?)/,/^(?:\$[A-Za-z]+\$[0-9]+)/,/^(?:[A-ZÄÖÜa-zäöü]{1,}[A-Za-z_0-9]+!)/,/^(?:'[A-ZÄÖÜa-zäöü ]{1,}[A-Za-z_0-9]+'+!)/,/^(?:\$[A-Za-z]+[0-9]+)/,/^(?:[A-Za-z]+\$[0-9]+)/,/^(?:[A-Za-z]+[0-9]+)/,/^(?:[A-Za-z\.]+(?=[(]))/,/^(?:[A-Za-z]{1,}[A-Za-z_0-9]+)/,/^(?:[A-Za-z_]+)/,/^(?:[0-9]+)/,/^(?:\[(.*)?\])/,/^(?:&)/,/^(?: )/,/^(?:[.])/,/^(?::)/,/^(?:;)/,/^(?:,)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:>)/,/^(?:<)/,/^(?:NOT\b)/,/^(?:")/,/^(?:')/,/^(?:!)/,/^(?:=)/,/^(?:%)/,/^(?:[#])/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammarParser;
exports.Parser = grammarParser.Parser;
exports.parse = function () { return grammarParser.parse.apply(grammarParser, arguments); };
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}
