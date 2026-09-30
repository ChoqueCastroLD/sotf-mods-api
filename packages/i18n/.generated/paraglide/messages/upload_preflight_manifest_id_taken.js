/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Manifest_Id_TakenInputs */

const en_upload_preflight_manifest_id_taken = /** @type {(inputs: Upload_Preflight_Manifest_Id_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Another mod already uses this manifest id.`)
};

const es_upload_preflight_manifest_id_taken = /** @type {(inputs: Upload_Preflight_Manifest_Id_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otro mod ya usa este id de manifest.`)
};

const de_upload_preflight_manifest_id_taken = /** @type {(inputs: Upload_Preflight_Manifest_Id_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein anderer Mod nutzt diese Manifest-ID bereits.`)
};

const fr_upload_preflight_manifest_id_taken = /** @type {(inputs: Upload_Preflight_Manifest_Id_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un autre mod utilise déjà cet id de manifest.`)
};

const it_upload_preflight_manifest_id_taken = /** @type {(inputs: Upload_Preflight_Manifest_Id_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un’altra mod usa già questo id del manifest.`)
};

const nl_upload_preflight_manifest_id_taken = /** @type {(inputs: Upload_Preflight_Manifest_Id_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een andere mod gebruikt dit manifest-id al.`)
};

const pl_upload_preflight_manifest_id_taken = /** @type {(inputs: Upload_Preflight_Manifest_Id_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inny mod używa już tego identyfikatora manifestu.`)
};

const pt_upload_preflight_manifest_id_taken = /** @type {(inputs: Upload_Preflight_Manifest_Id_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outro mod já usa este id de manifest.`)
};

const ru_upload_preflight_manifest_id_taken = /** @type {(inputs: Upload_Preflight_Manifest_Id_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот id из манифеста уже занят другим модом.`)
};

const sv_upload_preflight_manifest_id_taken = /** @type {(inputs: Upload_Preflight_Manifest_Id_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En annan mod använder redan detta manifest-id.`)
};

const tr_upload_preflight_manifest_id_taken = /** @type {(inputs: Upload_Preflight_Manifest_Id_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu manifest kimliğini başka bir mod kullanıyor.`)
};

const zh_upload_preflight_manifest_id_taken = /** @type {(inputs: Upload_Preflight_Manifest_Id_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`另一个模组已在使用这个清单 ID。`)
};

const ja_upload_preflight_manifest_id_taken = /** @type {(inputs: Upload_Preflight_Manifest_Id_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このマニフェストIDはすでに別のMODが使っています。`)
};

/**
* | output |
* | --- |
* | "Another mod already uses this manifest id." |
*
* @param {Upload_Preflight_Manifest_Id_TakenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_manifest_id_taken = /** @type {((inputs?: Upload_Preflight_Manifest_Id_TakenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Manifest_Id_TakenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_manifest_id_taken(inputs)
	if (locale === "de") return de_upload_preflight_manifest_id_taken(inputs)
	if (locale === "fr") return fr_upload_preflight_manifest_id_taken(inputs)
	if (locale === "it") return it_upload_preflight_manifest_id_taken(inputs)
	if (locale === "nl") return nl_upload_preflight_manifest_id_taken(inputs)
	if (locale === "pl") return pl_upload_preflight_manifest_id_taken(inputs)
	if (locale === "pt") return pt_upload_preflight_manifest_id_taken(inputs)
	if (locale === "ru") return ru_upload_preflight_manifest_id_taken(inputs)
	if (locale === "sv") return sv_upload_preflight_manifest_id_taken(inputs)
	if (locale === "tr") return tr_upload_preflight_manifest_id_taken(inputs)
	if (locale === "zh") return zh_upload_preflight_manifest_id_taken(inputs)
	if (locale === "ja") return ja_upload_preflight_manifest_id_taken(inputs)
	return en_upload_preflight_manifest_id_taken(inputs)
});
