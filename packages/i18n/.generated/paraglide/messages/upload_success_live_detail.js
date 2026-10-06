/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Upload_Success_Live_DetailInputs */

const en_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is now public.`)
};

const es_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ya es público.`)
};

const de_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ist jetzt öffentlich.`)
};

const fr_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} est maintenant public.`)
};

const it_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ora è pubblica.`)
};

const nl_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is nu openbaar.`)
};

const pl_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} jest już publiczny.`)
};

const pt_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} agora é público.`)
};

const ru_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» теперь доступен всем.`)
};

const sv_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} är nu offentlig.`)
};

const tr_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} artık herkese açık.`)
};

const zh_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 现已公开。`)
};

const ja_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を公開しました。`)
};

/**
* | output |
* | --- |
* | "{name} is now public." |
*
* @param {Upload_Success_Live_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_success_live_detail = /** @type {((inputs: Upload_Success_Live_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_Live_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_success_live_detail(inputs)
	if (locale === "de") return de_upload_success_live_detail(inputs)
	if (locale === "fr") return fr_upload_success_live_detail(inputs)
	if (locale === "it") return it_upload_success_live_detail(inputs)
	if (locale === "nl") return nl_upload_success_live_detail(inputs)
	if (locale === "pl") return pl_upload_success_live_detail(inputs)
	if (locale === "pt") return pt_upload_success_live_detail(inputs)
	if (locale === "ru") return ru_upload_success_live_detail(inputs)
	if (locale === "sv") return sv_upload_success_live_detail(inputs)
	if (locale === "tr") return tr_upload_success_live_detail(inputs)
	if (locale === "zh") return zh_upload_success_live_detail(inputs)
	if (locale === "ja") return ja_upload_success_live_detail(inputs)
	return en_upload_success_live_detail(inputs)
});
