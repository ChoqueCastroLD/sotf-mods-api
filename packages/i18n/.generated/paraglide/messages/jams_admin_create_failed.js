/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Create_FailedInputs */

const en_jams_admin_create_failed = /** @type {(inputs: Jams_Admin_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't create the jam`)
};

const es_jams_admin_create_failed = /** @type {(inputs: Jams_Admin_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo crear el jam`)
};

const de_jams_admin_create_failed = /** @type {(inputs: Jams_Admin_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam konnte nicht erstellt werden`)
};

const fr_jams_admin_create_failed = /** @type {(inputs: Jams_Admin_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de créer le jam`)
};

const it_jams_admin_create_failed = /** @type {(inputs: Jams_Admin_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile creare il jam`)
};

const nl_jams_admin_create_failed = /** @type {(inputs: Jams_Admin_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De jam kon niet worden gemaakt`)
};

const pl_jams_admin_create_failed = /** @type {(inputs: Jams_Admin_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się utworzyć jamu`)
};

const pt_jams_admin_create_failed = /** @type {(inputs: Jams_Admin_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível criar o jam`)
};

const ru_jams_admin_create_failed = /** @type {(inputs: Jams_Admin_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось создать джем`)
};

const sv_jams_admin_create_failed = /** @type {(inputs: Jams_Admin_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte skapa jammen`)
};

const tr_jams_admin_create_failed = /** @type {(inputs: Jams_Admin_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam oluşturulamadı`)
};

const zh_jams_admin_create_failed = /** @type {(inputs: Jams_Admin_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法创建 Jam`)
};

const ja_jams_admin_create_failed = /** @type {(inputs: Jams_Admin_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムを作成できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't create the jam" |
*
* @param {Jams_Admin_Create_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_create_failed = /** @type {((inputs?: Jams_Admin_Create_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Create_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_create_failed(inputs)
	if (locale === "de") return de_jams_admin_create_failed(inputs)
	if (locale === "fr") return fr_jams_admin_create_failed(inputs)
	if (locale === "it") return it_jams_admin_create_failed(inputs)
	if (locale === "nl") return nl_jams_admin_create_failed(inputs)
	if (locale === "pl") return pl_jams_admin_create_failed(inputs)
	if (locale === "pt") return pt_jams_admin_create_failed(inputs)
	if (locale === "ru") return ru_jams_admin_create_failed(inputs)
	if (locale === "sv") return sv_jams_admin_create_failed(inputs)
	if (locale === "tr") return tr_jams_admin_create_failed(inputs)
	if (locale === "zh") return zh_jams_admin_create_failed(inputs)
	if (locale === "ja") return ja_jams_admin_create_failed(inputs)
	return en_jams_admin_create_failed(inputs)
});
