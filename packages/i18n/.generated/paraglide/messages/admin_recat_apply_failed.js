/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Apply_FailedInputs */

const en_admin_recat_apply_failed = /** @type {(inputs: Admin_Recat_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t apply the changes`)
};

const es_admin_recat_apply_failed = /** @type {(inputs: Admin_Recat_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron aplicar los cambios`)
};

const de_admin_recat_apply_failed = /** @type {(inputs: Admin_Recat_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen konnten nicht angewendet werden`)
};

const fr_admin_recat_apply_failed = /** @type {(inputs: Admin_Recat_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’appliquer les changements`)
};

const it_admin_recat_apply_failed = /** @type {(inputs: Admin_Recat_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile applicare le modifiche`)
};

const nl_admin_recat_apply_failed = /** @type {(inputs: Admin_Recat_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kon de wijzigingen niet toepassen`)
};

const pl_admin_recat_apply_failed = /** @type {(inputs: Admin_Recat_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zastosować zmian`)
};

const pt_admin_recat_apply_failed = /** @type {(inputs: Admin_Recat_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível aplicar as alterações`)
};

const ru_admin_recat_apply_failed = /** @type {(inputs: Admin_Recat_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось применить изменения`)
};

const sv_admin_recat_apply_failed = /** @type {(inputs: Admin_Recat_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte tillämpa ändringarna`)
};

const tr_admin_recat_apply_failed = /** @type {(inputs: Admin_Recat_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklikler uygulanamadı`)
};

const zh_admin_recat_apply_failed = /** @type {(inputs: Admin_Recat_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法应用更改`)
};

const ja_admin_recat_apply_failed = /** @type {(inputs: Admin_Recat_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更を適用できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t apply the changes" |
*
* @param {Admin_Recat_Apply_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_apply_failed = /** @type {((inputs?: Admin_Recat_Apply_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Apply_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_apply_failed(inputs)
	if (locale === "de") return de_admin_recat_apply_failed(inputs)
	if (locale === "fr") return fr_admin_recat_apply_failed(inputs)
	if (locale === "it") return it_admin_recat_apply_failed(inputs)
	if (locale === "nl") return nl_admin_recat_apply_failed(inputs)
	if (locale === "pl") return pl_admin_recat_apply_failed(inputs)
	if (locale === "pt") return pt_admin_recat_apply_failed(inputs)
	if (locale === "ru") return ru_admin_recat_apply_failed(inputs)
	if (locale === "sv") return sv_admin_recat_apply_failed(inputs)
	if (locale === "tr") return tr_admin_recat_apply_failed(inputs)
	if (locale === "zh") return zh_admin_recat_apply_failed(inputs)
	if (locale === "ja") return ja_admin_recat_apply_failed(inputs)
	return en_admin_recat_apply_failed(inputs)
});
