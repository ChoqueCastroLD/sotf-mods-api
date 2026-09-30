/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, count: NonNullable<unknown> }} Basecamp_Attention_BrokenInputs */

const en_basecamp_attention_broken = /** @type {(inputs: Basecamp_Attention_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} report says it is broken on the current game build`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} reports say it is broken on the current game build`)
	
};

const es_basecamp_attention_broken = /** @type {(inputs: Basecamp_Attention_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} reporte dice que no funciona en la build actual del juego`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} reportes dicen que no funciona en la build actual del juego`)
	
};

const de_basecamp_attention_broken = /** @type {(inputs: Basecamp_Attention_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} Bericht meldet Probleme mit dem aktuellen Spiel-Build`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} Berichte melden Probleme mit dem aktuellen Spiel-Build`)
	
};

const fr_basecamp_attention_broken = /** @type {(inputs: Basecamp_Attention_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} : ${count__number} rapport le dit cassé sur le build actuel du jeu`);
	return /** @type {LocalizedString} */ (`${i?.name} : ${count__number} rapports le disent cassé sur le build actuel du jeu`)
	
};

const it_basecamp_attention_broken = /** @type {(inputs: Basecamp_Attention_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} rapporto dice che non funziona sulla build attuale del gioco`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} rapporti dicono che non funziona sulla build attuale del gioco`)
	
};

const nl_basecamp_attention_broken = /** @type {(inputs: Basecamp_Attention_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} rapport zegt dat hij kapot is op de huidige gamebuild`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} rapporten zeggen dat hij kapot is op de huidige gamebuild`)
	
};

const pl_basecamp_attention_broken = /** @type {(inputs: Basecamp_Attention_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} raport mówi, że nie działa na obecnym buildzie gry`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} raporty mówią, że nie działa na obecnym buildzie gry`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} raportów mówi, że nie działa na obecnym buildzie gry`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} raportu mówi, że nie działa na obecnym buildzie gry`)
	
};

const pt_basecamp_attention_broken = /** @type {(inputs: Basecamp_Attention_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} relatório diz que não funciona na build atual do jogo`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} relatórios dizem que não funciona na build atual do jogo`)
	
};

const ru_basecamp_attention_broken = /** @type {(inputs: Basecamp_Attention_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} отчёт сообщает о поломке на текущем билде игры`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} отчёта сообщают о поломке на текущем билде игры`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} отчётов сообщают о поломке на текущем билде игры`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} отчёта сообщают о поломке на текущем билде игры`)
	
};

const sv_basecamp_attention_broken = /** @type {(inputs: Basecamp_Attention_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} rapport säger att den är trasig på spelets aktuella build`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} rapporter säger att den är trasig på spelets aktuella build`)
	
};

const tr_basecamp_attention_broken = /** @type {(inputs: Basecamp_Attention_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} rapor güncel oyun sürümünde çalışmadığını söylüyor`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} rapor güncel oyun sürümünde çalışmadığını söylüyor`)
	
};

const zh_basecamp_attention_broken = /** @type {(inputs: Basecamp_Attention_BrokenInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.name}：${count__number} 份报告称其在当前游戏版本上无法运行`)
};

const ja_basecamp_attention_broken = /** @type {(inputs: Basecamp_Attention_BrokenInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.name}：現在のゲームビルドで動作しないという報告が ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{name}: {count__number} report says it is broken on the current game build" |
* | * | "{name}: {count__number} reports say it is broken on the current game build" |
*
* @param {Basecamp_Attention_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_broken = /** @type {((inputs: Basecamp_Attention_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_broken(inputs)
	if (locale === "de") return de_basecamp_attention_broken(inputs)
	if (locale === "fr") return fr_basecamp_attention_broken(inputs)
	if (locale === "it") return it_basecamp_attention_broken(inputs)
	if (locale === "nl") return nl_basecamp_attention_broken(inputs)
	if (locale === "pl") return pl_basecamp_attention_broken(inputs)
	if (locale === "pt") return pt_basecamp_attention_broken(inputs)
	if (locale === "ru") return ru_basecamp_attention_broken(inputs)
	if (locale === "sv") return sv_basecamp_attention_broken(inputs)
	if (locale === "tr") return tr_basecamp_attention_broken(inputs)
	if (locale === "zh") return zh_basecamp_attention_broken(inputs)
	if (locale === "ja") return ja_basecamp_attention_broken(inputs)
	return en_basecamp_attention_broken(inputs)
});
