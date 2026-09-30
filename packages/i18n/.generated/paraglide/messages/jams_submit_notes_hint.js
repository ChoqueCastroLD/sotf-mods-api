/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Jams_Submit_Notes_HintInputs */

const en_jams_submit_notes_hint = /** @type {(inputs: Jams_Submit_Notes_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Up to ${i?.max} characters. Tell people how it fits the theme.`)
};

const es_jams_submit_notes_hint = /** @type {(inputs: Jams_Submit_Notes_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hasta ${i?.max} caracteres. Cuenta cómo encaja con el tema.`)
};

const de_jams_submit_notes_hint = /** @type {(inputs: Jams_Submit_Notes_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bis zu ${i?.max} Zeichen. Erzähle, wie es zum Thema passt.`)
};

const fr_jams_submit_notes_hint = /** @type {(inputs: Jams_Submit_Notes_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jusqu'à ${i?.max} caractères. Expliquez comment il s'inscrit dans le thème.`)
};

const it_jams_submit_notes_hint = /** @type {(inputs: Jams_Submit_Notes_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fino a ${i?.max} caratteri. Racconta come si inserisce nel tema.`)
};

const nl_jams_submit_notes_hint = /** @type {(inputs: Jams_Submit_Notes_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Maximaal ${i?.max} tekens. Vertel hoe het bij het thema past.`)
};

const pl_jams_submit_notes_hint = /** @type {(inputs: Jams_Submit_Notes_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Do ${i?.max} znaków. Opisz, jak pasuje do tematu.`)
};

const pt_jams_submit_notes_hint = /** @type {(inputs: Jams_Submit_Notes_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Até ${i?.max} caracteres. Conte como ele se encaixa no tema.`)
};

const ru_jams_submit_notes_hint = /** @type {(inputs: Jams_Submit_Notes_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`До ${i?.max} символов. Расскажите, как работа связана с темой.`)
};

const sv_jams_submit_notes_hint = /** @type {(inputs: Jams_Submit_Notes_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Högst ${i?.max} tecken. Berätta hur det passar temat.`)
};

const tr_jams_submit_notes_hint = /** @type {(inputs: Jams_Submit_Notes_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En fazla ${i?.max} karakter. Temaya nasıl uyduğunu anlatın.`)
};

const zh_jams_submit_notes_hint = /** @type {(inputs: Jams_Submit_Notes_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最多 ${i?.max} 个字符。说说它如何契合主题。`)
};

const ja_jams_submit_notes_hint = /** @type {(inputs: Jams_Submit_Notes_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最大 ${i?.max} 文字。テーマとの関わりを書いてください。`)
};

/**
* | output |
* | --- |
* | "Up to {max} characters. Tell people how it fits the theme." |
*
* @param {Jams_Submit_Notes_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_submit_notes_hint = /** @type {((inputs: Jams_Submit_Notes_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Submit_Notes_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_submit_notes_hint(inputs)
	if (locale === "de") return de_jams_submit_notes_hint(inputs)
	if (locale === "fr") return fr_jams_submit_notes_hint(inputs)
	if (locale === "it") return it_jams_submit_notes_hint(inputs)
	if (locale === "nl") return nl_jams_submit_notes_hint(inputs)
	if (locale === "pl") return pl_jams_submit_notes_hint(inputs)
	if (locale === "pt") return pt_jams_submit_notes_hint(inputs)
	if (locale === "ru") return ru_jams_submit_notes_hint(inputs)
	if (locale === "sv") return sv_jams_submit_notes_hint(inputs)
	if (locale === "tr") return tr_jams_submit_notes_hint(inputs)
	if (locale === "zh") return zh_jams_submit_notes_hint(inputs)
	if (locale === "ja") return ja_jams_submit_notes_hint(inputs)
	return en_jams_submit_notes_hint(inputs)
});
