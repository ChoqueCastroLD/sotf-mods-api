/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Empty_HintInputs */

const en_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try fewer words, or narrow it down with mods:, builds:, kits:, @creator or > for commands.`)
};

const es_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prueba con menos palabras o acota con mods:, builds:, kits:, @creador o > para comandos.`)
};

const de_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versuch es mit weniger Wörtern oder grenz mit mods:, builds:, kits:, @creator oder > für Befehle ein.`)
};

const fr_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essayez avec moins de mots, ou affinez avec mods:, builds:, kits:, @créateur ou > pour les commandes.`)
};

const it_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prova con meno parole o restringi con mods:, builds:, kits:, @creatore o > per i comandi.`)
};

const nl_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probeer minder woorden, of verfijn met mods:, builds:, kits:, @maker of > voor opdrachten.`)
};

const pl_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj użyć mniej słów albo zawęź wyszukiwanie: mods:, builds:, kits:, @twórca lub > dla poleceń.`)
};

const pt_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tente usar menos palavras ou refine com mods:, builds:, kits:, @criador ou > para comandos.`)
};

const ru_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Попробуйте меньше слов или уточните поиск: mods:, builds:, kits:, @автор или > для команд.`)
};

const sv_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prova med färre ord, eller avgränsa med mods:, builds:, kits:, @skapare eller > för kommandon.`)
};

const tr_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha az kelime dene ya da mods:, builds:, kits:, @üretici veya komutlar için > ile daralt.`)
};

const zh_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`试试更少的关键词，或用 mods:、builds:、kits:、@创作者 或 >（命令）缩小范围。`)
};

const ja_cmdk_empty_hint = /** @type {(inputs: Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キーワードを減らすか、mods:、builds:、kits:、@クリエイター、コマンドは > で絞り込んでください。`)
};

/**
* | output |
* | --- |
* | "Try fewer words, or narrow it down with mods:, builds:, kits:, @creator or > for commands." |
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
