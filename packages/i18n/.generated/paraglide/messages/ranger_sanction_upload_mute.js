/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_Upload_MuteInputs */

const en_ranger_sanction_upload_mute = /** @type {(inputs: Ranger_Sanction_Upload_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Block uploads`)
};

const es_ranger_sanction_upload_mute = /** @type {(inputs: Ranger_Sanction_Upload_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bloquear subidas`)
};

const de_ranger_sanction_upload_mute = /** @type {(inputs: Ranger_Sanction_Upload_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploads sperren`)
};

const fr_ranger_sanction_upload_mute = /** @type {(inputs: Ranger_Sanction_Upload_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bloquer les envois`)
};

const it_ranger_sanction_upload_mute = /** @type {(inputs: Ranger_Sanction_Upload_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blocca i caricamenti`)
};

const nl_ranger_sanction_upload_mute = /** @type {(inputs: Ranger_Sanction_Upload_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploads blokkeren`)
};

const pl_ranger_sanction_upload_mute = /** @type {(inputs: Ranger_Sanction_Upload_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zablokuj przesyłanie`)
};

const pt_ranger_sanction_upload_mute = /** @type {(inputs: Ranger_Sanction_Upload_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bloquear envios`)
};

const ru_ranger_sanction_upload_mute = /** @type {(inputs: Ranger_Sanction_Upload_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запретить загрузки`)
};

const sv_ranger_sanction_upload_mute = /** @type {(inputs: Ranger_Sanction_Upload_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blockera uppladdningar`)
};

const tr_ranger_sanction_upload_mute = /** @type {(inputs: Ranger_Sanction_Upload_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yüklemeleri engelle`)
};

const zh_ranger_sanction_upload_mute = /** @type {(inputs: Ranger_Sanction_Upload_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`禁止上传`)
};

const ja_ranger_sanction_upload_mute = /** @type {(inputs: Ranger_Sanction_Upload_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップロード禁止`)
};

/**
* | output |
* | --- |
* | "Block uploads" |
*
* @param {Ranger_Sanction_Upload_MuteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_upload_mute = /** @type {((inputs?: Ranger_Sanction_Upload_MuteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Upload_MuteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_upload_mute(inputs)
	if (locale === "de") return de_ranger_sanction_upload_mute(inputs)
	if (locale === "fr") return fr_ranger_sanction_upload_mute(inputs)
	if (locale === "it") return it_ranger_sanction_upload_mute(inputs)
	if (locale === "nl") return nl_ranger_sanction_upload_mute(inputs)
	if (locale === "pl") return pl_ranger_sanction_upload_mute(inputs)
	if (locale === "pt") return pt_ranger_sanction_upload_mute(inputs)
	if (locale === "ru") return ru_ranger_sanction_upload_mute(inputs)
	if (locale === "sv") return sv_ranger_sanction_upload_mute(inputs)
	if (locale === "tr") return tr_ranger_sanction_upload_mute(inputs)
	if (locale === "zh") return zh_ranger_sanction_upload_mute(inputs)
	if (locale === "ja") return ja_ranger_sanction_upload_mute(inputs)
	return en_ranger_sanction_upload_mute(inputs)
});
