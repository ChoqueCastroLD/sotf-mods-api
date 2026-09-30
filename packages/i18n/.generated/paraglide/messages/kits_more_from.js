/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ curator: NonNullable<unknown> }} Kits_More_FromInputs */

const en_kits_more_from = /** @type {(inputs: Kits_More_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`More kits by ${i?.curator}`)
};

const es_kits_more_from = /** @type {(inputs: Kits_More_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Más kits de ${i?.curator}`)
};

const de_kits_more_from = /** @type {(inputs: Kits_More_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Weitere Kits von ${i?.curator}`)
};

const fr_kits_more_from = /** @type {(inputs: Kits_More_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autres kits de ${i?.curator}`)
};

const it_kits_more_from = /** @type {(inputs: Kits_More_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Altri kit di ${i?.curator}`)
};

const nl_kits_more_from = /** @type {(inputs: Kits_More_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Meer kits van ${i?.curator}`)
};

const pl_kits_more_from = /** @type {(inputs: Kits_More_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Więcej zestawów od ${i?.curator}`)
};

const pt_kits_more_from = /** @type {(inputs: Kits_More_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mais kits de ${i?.curator}`)
};

const ru_kits_more_from = /** @type {(inputs: Kits_More_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Другие наборы от ${i?.curator}`)
};

const sv_kits_more_from = /** @type {(inputs: Kits_More_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fler kit av ${i?.curator}`)
};

const tr_kits_more_from = /** @type {(inputs: Kits_More_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.curator} kullanıcısının diğer kitleri`)
};

const zh_kits_more_from = /** @type {(inputs: Kits_More_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.curator} 的更多套装`)
};

const ja_kits_more_from = /** @type {(inputs: Kits_More_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.curator} さんの他のキット`)
};

/**
* | output |
* | --- |
* | "More kits by {curator}" |
*
* @param {Kits_More_FromInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_more_from = /** @type {((inputs: Kits_More_FromInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_More_FromInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_more_from(inputs)
	if (locale === "de") return de_kits_more_from(inputs)
	if (locale === "fr") return fr_kits_more_from(inputs)
	if (locale === "it") return it_kits_more_from(inputs)
	if (locale === "nl") return nl_kits_more_from(inputs)
	if (locale === "pl") return pl_kits_more_from(inputs)
	if (locale === "pt") return pt_kits_more_from(inputs)
	if (locale === "ru") return ru_kits_more_from(inputs)
	if (locale === "sv") return sv_kits_more_from(inputs)
	if (locale === "tr") return tr_kits_more_from(inputs)
	if (locale === "zh") return zh_kits_more_from(inputs)
	if (locale === "ja") return ja_kits_more_from(inputs)
	return en_kits_more_from(inputs)
});
