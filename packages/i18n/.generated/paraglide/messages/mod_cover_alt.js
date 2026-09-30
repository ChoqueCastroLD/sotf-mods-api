/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Cover_AltInputs */

const en_mod_cover_alt = /** @type {(inputs: Mod_Cover_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cover image of ${i?.name}`)
};

const es_mod_cover_alt = /** @type {(inputs: Mod_Cover_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Portada de ${i?.name}`)
};

const de_mod_cover_alt = /** @type {(inputs: Mod_Cover_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Titelbild von ${i?.name}`)
};

const fr_mod_cover_alt = /** @type {(inputs: Mod_Cover_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Image de couverture de ${i?.name}`)
};

const it_mod_cover_alt = /** @type {(inputs: Mod_Cover_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Immagine di copertina di ${i?.name}`)
};

const nl_mod_cover_alt = /** @type {(inputs: Mod_Cover_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Omslagafbeelding van ${i?.name}`)
};

const pl_mod_cover_alt = /** @type {(inputs: Mod_Cover_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Okładka ${i?.name}`)
};

const pt_mod_cover_alt = /** @type {(inputs: Mod_Cover_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Imagem de capa de ${i?.name}`)
};

const ru_mod_cover_alt = /** @type {(inputs: Mod_Cover_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Обложка ${i?.name}`)
};

const sv_mod_cover_alt = /** @type {(inputs: Mod_Cover_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Omslagsbild för ${i?.name}`)
};

const tr_mod_cover_alt = /** @type {(inputs: Mod_Cover_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kapak görseli`)
};

const zh_mod_cover_alt = /** @type {(inputs: Mod_Cover_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的封面图`)
};

const ja_mod_cover_alt = /** @type {(inputs: Mod_Cover_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のカバー画像`)
};

/**
* | output |
* | --- |
* | "Cover image of {name}" |
*
* @param {Mod_Cover_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_cover_alt = /** @type {((inputs: Mod_Cover_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Cover_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_cover_alt(inputs)
	if (locale === "de") return de_mod_cover_alt(inputs)
	if (locale === "fr") return fr_mod_cover_alt(inputs)
	if (locale === "it") return it_mod_cover_alt(inputs)
	if (locale === "nl") return nl_mod_cover_alt(inputs)
	if (locale === "pl") return pl_mod_cover_alt(inputs)
	if (locale === "pt") return pt_mod_cover_alt(inputs)
	if (locale === "ru") return ru_mod_cover_alt(inputs)
	if (locale === "sv") return sv_mod_cover_alt(inputs)
	if (locale === "tr") return tr_mod_cover_alt(inputs)
	if (locale === "zh") return zh_mod_cover_alt(inputs)
	if (locale === "ja") return ja_mod_cover_alt(inputs)
	return en_mod_cover_alt(inputs)
});
