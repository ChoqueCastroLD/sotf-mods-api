/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_No_Permission_TitleInputs */

const en_upload_no_permission_title = /** @type {(inputs: Upload_No_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing is paused on this account.`)
};

const es_upload_no_permission_title = /** @type {(inputs: Upload_No_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La publicación está pausada en esta cuenta.`)
};

const de_upload_no_permission_title = /** @type {(inputs: Upload_No_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlichen ist für dieses Konto pausiert.`)
};

const fr_upload_no_permission_title = /** @type {(inputs: Upload_No_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La publication est suspendue sur ce compte.`)
};

const it_upload_no_permission_title = /** @type {(inputs: Upload_No_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La pubblicazione è sospesa per questo account.`)
};

const nl_upload_no_permission_title = /** @type {(inputs: Upload_No_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiceren is gepauzeerd voor dit account.`)
};

const pl_upload_no_permission_title = /** @type {(inputs: Upload_No_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publikowanie na tym koncie jest wstrzymane.`)
};

const pt_upload_no_permission_title = /** @type {(inputs: Upload_No_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A publicação está pausada nesta conta.`)
};

const ru_upload_no_permission_title = /** @type {(inputs: Upload_No_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Публикация для этого аккаунта приостановлена.`)
};

const sv_upload_no_permission_title = /** @type {(inputs: Upload_No_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicering är pausad för det här kontot.`)
};

const tr_upload_no_permission_title = /** @type {(inputs: Upload_No_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu hesapta yayınlama duraklatıldı.`)
};

const zh_upload_no_permission_title = /** @type {(inputs: Upload_No_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此账号的发布功能已暂停。`)
};

const ja_upload_no_permission_title = /** @type {(inputs: Upload_No_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このアカウントでは公開が一時停止されています。`)
};

/**
* | output |
* | --- |
* | "Publishing is paused on this account." |
*
* @param {Upload_No_Permission_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_no_permission_title = /** @type {((inputs?: Upload_No_Permission_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_No_Permission_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_no_permission_title(inputs)
	if (locale === "de") return de_upload_no_permission_title(inputs)
	if (locale === "fr") return fr_upload_no_permission_title(inputs)
	if (locale === "it") return it_upload_no_permission_title(inputs)
	if (locale === "nl") return nl_upload_no_permission_title(inputs)
	if (locale === "pl") return pl_upload_no_permission_title(inputs)
	if (locale === "pt") return pt_upload_no_permission_title(inputs)
	if (locale === "ru") return ru_upload_no_permission_title(inputs)
	if (locale === "sv") return sv_upload_no_permission_title(inputs)
	if (locale === "tr") return tr_upload_no_permission_title(inputs)
	if (locale === "zh") return zh_upload_no_permission_title(inputs)
	if (locale === "ja") return ja_upload_no_permission_title(inputs)
	return en_upload_no_permission_title(inputs)
});
