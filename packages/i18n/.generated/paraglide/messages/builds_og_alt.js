/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Builds_Og_AltInputs */

const en_builds_og_alt = /** @type {(inputs: Builds_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Preview of ${i?.name}`)
};

const es_builds_og_alt = /** @type {(inputs: Builds_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vista previa de ${i?.name}`)
};

const de_builds_og_alt = /** @type {(inputs: Builds_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vorschau von ${i?.name}`)
};

const fr_builds_og_alt = /** @type {(inputs: Builds_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aperçu de ${i?.name}`)
};

const it_builds_og_alt = /** @type {(inputs: Builds_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Anteprima di ${i?.name}`)
};

const nl_builds_og_alt = /** @type {(inputs: Builds_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Voorbeeld van ${i?.name}`)
};

const pl_builds_og_alt = /** @type {(inputs: Builds_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Podgląd ${i?.name}`)
};

const pt_builds_og_alt = /** @type {(inputs: Builds_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prévia de ${i?.name}`)
};

const ru_builds_og_alt = /** @type {(inputs: Builds_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Превью: ${i?.name}`)
};

const sv_builds_og_alt = /** @type {(inputs: Builds_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Förhandsvisning av ${i?.name}`)
};

const tr_builds_og_alt = /** @type {(inputs: Builds_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} önizlemesi`)
};

const zh_builds_og_alt = /** @type {(inputs: Builds_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的预览`)
};

const ja_builds_og_alt = /** @type {(inputs: Builds_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のプレビュー`)
};

/**
* | output |
* | --- |
* | "Preview of {name}" |
*
* @param {Builds_Og_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_og_alt = /** @type {((inputs: Builds_Og_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Og_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_og_alt(inputs)
	if (locale === "de") return de_builds_og_alt(inputs)
	if (locale === "fr") return fr_builds_og_alt(inputs)
	if (locale === "it") return it_builds_og_alt(inputs)
	if (locale === "nl") return nl_builds_og_alt(inputs)
	if (locale === "pl") return pl_builds_og_alt(inputs)
	if (locale === "pt") return pt_builds_og_alt(inputs)
	if (locale === "ru") return ru_builds_og_alt(inputs)
	if (locale === "sv") return sv_builds_og_alt(inputs)
	if (locale === "tr") return tr_builds_og_alt(inputs)
	if (locale === "zh") return zh_builds_og_alt(inputs)
	if (locale === "ja") return ja_builds_og_alt(inputs)
	return en_builds_og_alt(inputs)
});
