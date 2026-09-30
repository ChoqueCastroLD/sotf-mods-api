/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Delete_FailedInputs */

const en_admin_awards_delete_failed = /** @type {(inputs: Admin_Awards_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t withdraw the award`)
};

const es_admin_awards_delete_failed = /** @type {(inputs: Admin_Awards_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo retirar el premio`)
};

const de_admin_awards_delete_failed = /** @type {(inputs: Admin_Awards_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auszeichnung konnte nicht zurückgezogen werden`)
};

const fr_admin_awards_delete_failed = /** @type {(inputs: Admin_Awards_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de retirer la récompense`)
};

const it_admin_awards_delete_failed = /** @type {(inputs: Admin_Awards_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile revocare il premio`)
};

const nl_admin_awards_delete_failed = /** @type {(inputs: Admin_Awards_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kon de prijs niet intrekken`)
};

const pl_admin_awards_delete_failed = /** @type {(inputs: Admin_Awards_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się odebrać wyróżnienia`)
};

const pt_admin_awards_delete_failed = /** @type {(inputs: Admin_Awards_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível retirar o prêmio`)
};

const ru_admin_awards_delete_failed = /** @type {(inputs: Admin_Awards_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось отозвать награду`)
};

const sv_admin_awards_delete_failed = /** @type {(inputs: Admin_Awards_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte dra tillbaka utmärkelsen`)
};

const tr_admin_awards_delete_failed = /** @type {(inputs: Admin_Awards_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ödül geri alınamadı`)
};

const zh_admin_awards_delete_failed = /** @type {(inputs: Admin_Awards_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法撤销奖项`)
};

const ja_admin_awards_delete_failed = /** @type {(inputs: Admin_Awards_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アワードを取り消せませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t withdraw the award" |
*
* @param {Admin_Awards_Delete_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_delete_failed = /** @type {((inputs?: Admin_Awards_Delete_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Delete_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_delete_failed(inputs)
	if (locale === "de") return de_admin_awards_delete_failed(inputs)
	if (locale === "fr") return fr_admin_awards_delete_failed(inputs)
	if (locale === "it") return it_admin_awards_delete_failed(inputs)
	if (locale === "nl") return nl_admin_awards_delete_failed(inputs)
	if (locale === "pl") return pl_admin_awards_delete_failed(inputs)
	if (locale === "pt") return pt_admin_awards_delete_failed(inputs)
	if (locale === "ru") return ru_admin_awards_delete_failed(inputs)
	if (locale === "sv") return sv_admin_awards_delete_failed(inputs)
	if (locale === "tr") return tr_admin_awards_delete_failed(inputs)
	if (locale === "zh") return zh_admin_awards_delete_failed(inputs)
	if (locale === "ja") return ja_admin_awards_delete_failed(inputs)
	return en_admin_awards_delete_failed(inputs)
});
