/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Prizes_HintInputs */

const en_jams_editor_prizes_hint = /** @type {(inputs: Jams_Editor_Prizes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What the winners get. Markdown is supported.`)
};

const es_jams_editor_prizes_hint = /** @type {(inputs: Jams_Editor_Prizes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué reciben los ganadores. Admite Markdown.`)
};

const de_jams_editor_prizes_hint = /** @type {(inputs: Jams_Editor_Prizes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was die Gewinner bekommen. Markdown wird unterstützt.`)
};

const fr_jams_editor_prizes_hint = /** @type {(inputs: Jams_Editor_Prizes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce que reçoivent les gagnants. Le Markdown est pris en charge.`)
};

const it_jams_editor_prizes_hint = /** @type {(inputs: Jams_Editor_Prizes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa ricevono i vincitori. Markdown supportato.`)
};

const nl_jams_editor_prizes_hint = /** @type {(inputs: Jams_Editor_Prizes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat de winnaars krijgen. Markdown wordt ondersteund.`)
};

const pl_jams_editor_prizes_hint = /** @type {(inputs: Jams_Editor_Prizes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co dostają zwycięzcy. Obsługiwany jest Markdown.`)
};

const pt_jams_editor_prizes_hint = /** @type {(inputs: Jams_Editor_Prizes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que os vencedores recebem. Aceita Markdown.`)
};

const ru_jams_editor_prizes_hint = /** @type {(inputs: Jams_Editor_Prizes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что получают победители. Поддерживается Markdown.`)
};

const sv_jams_editor_prizes_hint = /** @type {(inputs: Jams_Editor_Prizes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad vinnarna får. Markdown stöds.`)
};

const tr_jams_editor_prizes_hint = /** @type {(inputs: Jams_Editor_Prizes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kazananların alacakları. Markdown desteklenir.`)
};

const zh_jams_editor_prizes_hint = /** @type {(inputs: Jams_Editor_Prizes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获奖者可获得的奖励，支持 Markdown。`)
};

const ja_jams_editor_prizes_hint = /** @type {(inputs: Jams_Editor_Prizes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`入賞者に贈られるものです。Markdown が使えます。`)
};

/**
* | output |
* | --- |
* | "What the winners get. Markdown is supported." |
*
* @param {Jams_Editor_Prizes_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_prizes_hint = /** @type {((inputs?: Jams_Editor_Prizes_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Prizes_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_prizes_hint(inputs)
	if (locale === "de") return de_jams_editor_prizes_hint(inputs)
	if (locale === "fr") return fr_jams_editor_prizes_hint(inputs)
	if (locale === "it") return it_jams_editor_prizes_hint(inputs)
	if (locale === "nl") return nl_jams_editor_prizes_hint(inputs)
	if (locale === "pl") return pl_jams_editor_prizes_hint(inputs)
	if (locale === "pt") return pt_jams_editor_prizes_hint(inputs)
	if (locale === "ru") return ru_jams_editor_prizes_hint(inputs)
	if (locale === "sv") return sv_jams_editor_prizes_hint(inputs)
	if (locale === "tr") return tr_jams_editor_prizes_hint(inputs)
	if (locale === "zh") return zh_jams_editor_prizes_hint(inputs)
	if (locale === "ja") return ja_jams_editor_prizes_hint(inputs)
	return en_jams_editor_prizes_hint(inputs)
});
