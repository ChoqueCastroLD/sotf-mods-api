/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Empty_HintInputs */

const en_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try fewer words, or narrow it down with mods:, builds:, kits:, @creator, > for commands or by:/cat:/sort:.`)
};

const es_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prueba con menos palabras o acota con mods:, builds:, kits:, @creador, > para comandos o by:/cat:/sort:.`)
};

const de_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weniger Wörter versuchen oder mit mods:, builds:, kits:, @Kreative, > für Befehle oder by:/cat:/sort: eingrenzen.`)
};

const fr_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essayez moins de mots, ou affinez avec mods:, builds:, kits:, @créateur, > pour les commandes ou by:/cat:/sort:.`)
};

const it_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prova con meno parole o restringi con mods:, builds:, kits:, @creator, > per i comandi o by:/cat:/sort:.`)
};

const nl_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probeer minder woorden, of verfijn met mods:, builds:, kits:, @maker, > voor commando’s of by:/cat:/sort:.`)
};

const pl_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj mniej słów albo zawęź przez mods:, builds:, kits:, @twórca, > dla poleceń lub by:/cat:/sort:.`)
};

const pt_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tente menos palavras ou refine com mods:, builds:, kits:, @criador, > para comandos ou by:/cat:/sort:.`)
};

const ru_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Попробуйте меньше слов или сузьте поиск: mods:, builds:, kits:, @автор, > для команд или by:/cat:/sort:.`)
};

const sv_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök med färre ord eller begränsa med mods:, builds:, kits:, @skapare, > för kommandon eller by:/cat:/sort:.`)
};

const tr_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha az kelime deneyin ya da mods:, builds:, kits:, @yaratıcı, komutlar için > veya by:/cat:/sort: ile daraltın.`)
};

const zh_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`试试更少的词，或用 mods:、builds:、kits:、@创作者、> 命令或 by:/cat:/sort: 缩小范围。`)
};

const ja_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`語数を減らすか、mods:、builds:、kits:、@クリエイター、コマンドの >、by:/cat:/sort: で絞り込んでください。`)
};

/**
* | output |
* | --- |
* | "Try fewer words, or narrow it down with mods:, builds:, kits:, @creator, > for commands or by:/cat:/sort:." |
*
* @param {Cmdk_Empty_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_empty_hint = /** @type {((inputs?: Cmdk_Empty_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Empty_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_empty_hint(inputs)
	if (locale === "de") return de_cmdk_empty_hint(inputs)
	if (locale === "fr") return fr_cmdk_empty_hint(inputs)
	if (locale === "it") return it_cmdk_empty_hint(inputs)
	if (locale === "nl") return nl_cmdk_empty_hint(inputs)
	if (locale === "pl") return pl_cmdk_empty_hint(inputs)
	if (locale === "pt") return pt_cmdk_empty_hint(inputs)
	if (locale === "ru") return ru_cmdk_empty_hint(inputs)
	if (locale === "sv") return sv_cmdk_empty_hint(inputs)
	if (locale === "tr") return tr_cmdk_empty_hint(inputs)
	if (locale === "zh") return zh_cmdk_empty_hint(inputs)
	if (locale === "ja") return ja_cmdk_empty_hint(inputs)
	return en_cmdk_empty_hint(inputs)
});
