/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ type: NonNullable<unknown>, max: NonNullable<unknown> }} Upload_Drop_HintInputs */

const en_upload_drop_hint = /** @type {(inputs: Upload_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} · up to ${i?.max}`)
};

const es_upload_drop_hint = /** @type {(inputs: Upload_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} · hasta ${i?.max}`)
};

const de_upload_drop_hint = /** @type {(inputs: Upload_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} · bis ${i?.max}`)
};

const fr_upload_drop_hint = /** @type {(inputs: Upload_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} · jusqu’à ${i?.max}`)
};

const it_upload_drop_hint = /** @type {(inputs: Upload_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} · fino a ${i?.max}`)
};

const nl_upload_drop_hint = /** @type {(inputs: Upload_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} · tot ${i?.max}`)
};

const pl_upload_drop_hint = /** @type {(inputs: Upload_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} · do ${i?.max}`)
};

const pt_upload_drop_hint = /** @type {(inputs: Upload_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} · até ${i?.max}`)
};

const ru_upload_drop_hint = /** @type {(inputs: Upload_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} · до ${i?.max}`)
};

const sv_upload_drop_hint = /** @type {(inputs: Upload_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} · upp till ${i?.max}`)
};

const tr_upload_drop_hint = /** @type {(inputs: Upload_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} · en fazla ${i?.max}`)
};

const zh_upload_drop_hint = /** @type {(inputs: Upload_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} · 最大 ${i?.max}`)
};

const ja_upload_drop_hint = /** @type {(inputs: Upload_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} · 最大 ${i?.max}`)
};

/**
* | output |
* | --- |
* | "{type} · up to {max}" |
*
* @param {Upload_Drop_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drop_hint = /** @type {((inputs: Upload_Drop_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drop_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drop_hint(inputs)
	if (locale === "de") return de_upload_drop_hint(inputs)
	if (locale === "fr") return fr_upload_drop_hint(inputs)
	if (locale === "it") return it_upload_drop_hint(inputs)
	if (locale === "nl") return nl_upload_drop_hint(inputs)
	if (locale === "pl") return pl_upload_drop_hint(inputs)
	if (locale === "pt") return pt_upload_drop_hint(inputs)
	if (locale === "ru") return ru_upload_drop_hint(inputs)
	if (locale === "sv") return sv_upload_drop_hint(inputs)
	if (locale === "tr") return tr_upload_drop_hint(inputs)
	if (locale === "zh") return zh_upload_drop_hint(inputs)
	if (locale === "ja") return ja_upload_drop_hint(inputs)
	return en_upload_drop_hint(inputs)
});
