/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ percent: NonNullable<unknown>, loaded: NonNullable<unknown>, total: NonNullable<unknown> }} Upload_Progress_ValueInputs */

const en_upload_progress_value = /** @type {(inputs: Upload_Progress_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} · ${i?.loaded} of ${i?.total}`)
};

const es_upload_progress_value = /** @type {(inputs: Upload_Progress_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} · ${i?.loaded} de ${i?.total}`)
};

const de_upload_progress_value = /** @type {(inputs: Upload_Progress_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} · ${i?.loaded} von ${i?.total}`)
};

const fr_upload_progress_value = /** @type {(inputs: Upload_Progress_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} · ${i?.loaded} sur ${i?.total}`)
};

const it_upload_progress_value = /** @type {(inputs: Upload_Progress_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} · ${i?.loaded} di ${i?.total}`)
};

const nl_upload_progress_value = /** @type {(inputs: Upload_Progress_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} · ${i?.loaded} van ${i?.total}`)
};

const pl_upload_progress_value = /** @type {(inputs: Upload_Progress_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} · ${i?.loaded} z ${i?.total}`)
};

const pt_upload_progress_value = /** @type {(inputs: Upload_Progress_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} · ${i?.loaded} de ${i?.total}`)
};

const ru_upload_progress_value = /** @type {(inputs: Upload_Progress_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} · ${i?.loaded} из ${i?.total}`)
};

const sv_upload_progress_value = /** @type {(inputs: Upload_Progress_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} · ${i?.loaded} av ${i?.total}`)
};

const tr_upload_progress_value = /** @type {(inputs: Upload_Progress_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} · ${i?.loaded} / ${i?.total}`)
};

const zh_upload_progress_value = /** @type {(inputs: Upload_Progress_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} · ${i?.loaded} / ${i?.total}`)
};

const ja_upload_progress_value = /** @type {(inputs: Upload_Progress_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} · ${i?.loaded} / ${i?.total}`)
};

/**
* | output |
* | --- |
* | "{percent} · {loaded} of {total}" |
*
* @param {Upload_Progress_ValueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_progress_value = /** @type {((inputs: Upload_Progress_ValueInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Progress_ValueInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_progress_value(inputs)
	if (locale === "de") return de_upload_progress_value(inputs)
	if (locale === "fr") return fr_upload_progress_value(inputs)
	if (locale === "it") return it_upload_progress_value(inputs)
	if (locale === "nl") return nl_upload_progress_value(inputs)
	if (locale === "pl") return pl_upload_progress_value(inputs)
	if (locale === "pt") return pt_upload_progress_value(inputs)
	if (locale === "ru") return ru_upload_progress_value(inputs)
	if (locale === "sv") return sv_upload_progress_value(inputs)
	if (locale === "tr") return tr_upload_progress_value(inputs)
	if (locale === "zh") return zh_upload_progress_value(inputs)
	if (locale === "ja") return ja_upload_progress_value(inputs)
	return en_upload_progress_value(inputs)
});
