/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_AlreadyInputs */

const en_settings_delete_already = /** @type {(inputs: Settings_Delete_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A deletion is already scheduled for your account.`)
};

const es_settings_delete_already = /** @type {(inputs: Settings_Delete_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya hay un borrado programado para tu cuenta.`)
};

const de_settings_delete_already = /** @type {(inputs: Settings_Delete_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für dein Konto ist bereits eine Löschung geplant.`)
};

const fr_settings_delete_already = /** @type {(inputs: Settings_Delete_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une suppression est déjà programmée pour votre compte.`)
};

const it_settings_delete_already = /** @type {(inputs: Settings_Delete_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per il tuo account è già programmata un’eliminazione.`)
};

const nl_settings_delete_already = /** @type {(inputs: Settings_Delete_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor je account staat al een verwijdering gepland.`)
};

const pl_settings_delete_already = /** @type {(inputs: Settings_Delete_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięcie twojego konta jest już zaplanowane.`)
};

const pt_settings_delete_already = /** @type {(inputs: Settings_Delete_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Já existe uma exclusão agendada para sua conta.`)
};

const ru_settings_delete_already = /** @type {(inputs: Settings_Delete_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удаление вашего аккаунта уже запланировано.`)
};

const sv_settings_delete_already = /** @type {(inputs: Settings_Delete_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En radering är redan schemalagd för ditt konto.`)
};

const tr_settings_delete_already = /** @type {(inputs: Settings_Delete_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabın için zaten planlanmış bir silme işlemi var.`)
};

const zh_settings_delete_already = /** @type {(inputs: Settings_Delete_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的账户已安排删除。`)
};

const ja_settings_delete_already = /** @type {(inputs: Settings_Delete_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このアカウントはすでに削除が予定されています。`)
};

/**
* | output |
* | --- |
* | "A deletion is already scheduled for your account." |
*
* @param {Settings_Delete_AlreadyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_already = /** @type {((inputs?: Settings_Delete_AlreadyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_AlreadyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_already(inputs)
	if (locale === "de") return de_settings_delete_already(inputs)
	if (locale === "fr") return fr_settings_delete_already(inputs)
	if (locale === "it") return it_settings_delete_already(inputs)
	if (locale === "nl") return nl_settings_delete_already(inputs)
	if (locale === "pl") return pl_settings_delete_already(inputs)
	if (locale === "pt") return pt_settings_delete_already(inputs)
	if (locale === "ru") return ru_settings_delete_already(inputs)
	if (locale === "sv") return sv_settings_delete_already(inputs)
	if (locale === "tr") return tr_settings_delete_already(inputs)
	if (locale === "zh") return zh_settings_delete_already(inputs)
	if (locale === "ja") return ja_settings_delete_already(inputs)
	return en_settings_delete_already(inputs)
});
