/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Privacy_Data_TextInputs */

const en_settings_privacy_data_text = /** @type {(inputs: Settings_Privacy_Data_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can export everything we store about you, or delete your account.`)
};

const es_settings_privacy_data_text = /** @type {(inputs: Settings_Privacy_Data_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puedes exportar todo lo que guardamos sobre ti o borrar tu cuenta.`)
};

const de_settings_privacy_data_text = /** @type {(inputs: Settings_Privacy_Data_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kannst alles exportieren, was wir über dich speichern, oder dein Konto löschen.`)
};

const fr_settings_privacy_data_text = /** @type {(inputs: Settings_Privacy_Data_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous pouvez exporter tout ce que nous conservons sur vous ou supprimer votre compte.`)
};

const it_settings_privacy_data_text = /** @type {(inputs: Settings_Privacy_Data_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puoi esportare tutto ciò che conserviamo su di te o eliminare il tuo account.`)
};

const nl_settings_privacy_data_text = /** @type {(inputs: Settings_Privacy_Data_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je kunt alles exporteren wat we over je bewaren, of je account verwijderen.`)
};

const pl_settings_privacy_data_text = /** @type {(inputs: Settings_Privacy_Data_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Możesz wyeksportować wszystko, co o tobie przechowujemy, albo usunąć konto.`)
};

const pt_settings_privacy_data_text = /** @type {(inputs: Settings_Privacy_Data_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você pode exportar tudo o que guardamos sobre você ou excluir sua conta.`)
};

const ru_settings_privacy_data_text = /** @type {(inputs: Settings_Privacy_Data_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы можете экспортировать всё, что мы о вас храним, или удалить аккаунт.`)
};

const sv_settings_privacy_data_text = /** @type {(inputs: Settings_Privacy_Data_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kan exportera allt vi sparar om dig, eller radera ditt konto.`)
};

const tr_settings_privacy_data_text = /** @type {(inputs: Settings_Privacy_Data_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hakkında sakladığımız her şeyi dışa aktarabilir ya da hesabını silebilirsin.`)
};

const zh_settings_privacy_data_text = /** @type {(inputs: Settings_Privacy_Data_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你可以导出我们保存的关于你的所有数据，或删除你的账户。`)
};

const ja_settings_privacy_data_text = /** @type {(inputs: Settings_Privacy_Data_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存しているすべてのデータのエクスポートや、アカウントの削除ができます。`)
};

/**
* | output |
* | --- |
* | "You can export everything we store about you, or delete your account." |
*
* @param {Settings_Privacy_Data_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_privacy_data_text = /** @type {((inputs?: Settings_Privacy_Data_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Privacy_Data_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_privacy_data_text(inputs)
	if (locale === "de") return de_settings_privacy_data_text(inputs)
	if (locale === "fr") return fr_settings_privacy_data_text(inputs)
	if (locale === "it") return it_settings_privacy_data_text(inputs)
	if (locale === "nl") return nl_settings_privacy_data_text(inputs)
	if (locale === "pl") return pl_settings_privacy_data_text(inputs)
	if (locale === "pt") return pt_settings_privacy_data_text(inputs)
	if (locale === "ru") return ru_settings_privacy_data_text(inputs)
	if (locale === "sv") return sv_settings_privacy_data_text(inputs)
	if (locale === "tr") return tr_settings_privacy_data_text(inputs)
	if (locale === "zh") return zh_settings_privacy_data_text(inputs)
	if (locale === "ja") return ja_settings_privacy_data_text(inputs)
	return en_settings_privacy_data_text(inputs)
});
