/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Data_HintInputs */

const en_settings_data_hint = /** @type {(inputs: Settings_Data_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Export everything we have about you, or delete your account.`)
};

const es_settings_data_hint = /** @type {(inputs: Settings_Data_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporta todo lo que tenemos sobre ti o borra tu cuenta.`)
};

const de_settings_data_hint = /** @type {(inputs: Settings_Data_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportiere alles, was wir über dich haben, oder lösche dein Konto.`)
};

const fr_settings_data_hint = /** @type {(inputs: Settings_Data_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportez tout ce que nous avons sur vous ou supprimez votre compte.`)
};

const it_settings_data_hint = /** @type {(inputs: Settings_Data_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esporta tutto ciò che abbiamo su di te o elimina il tuo account.`)
};

const nl_settings_data_hint = /** @type {(inputs: Settings_Data_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporteer alles wat we over je hebben, of verwijder je account.`)
};

const pl_settings_data_hint = /** @type {(inputs: Settings_Data_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyeksportuj wszystko, co o tobie mamy, albo usuń konto.`)
};

const pt_settings_data_hint = /** @type {(inputs: Settings_Data_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporte tudo o que temos sobre você ou exclua sua conta.`)
};

const ru_settings_data_hint = /** @type {(inputs: Settings_Data_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Экспортируйте всё, что у нас о вас есть, или удалите аккаунт.`)
};

const sv_settings_data_hint = /** @type {(inputs: Settings_Data_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportera allt vi har om dig, eller radera ditt konto.`)
};

const tr_settings_data_hint = /** @type {(inputs: Settings_Data_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hakkında sahip olduğumuz her şeyi dışa aktar ya da hesabını sil.`)
};

const zh_settings_data_hint = /** @type {(inputs: Settings_Data_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导出我们保存的关于你的所有数据，或删除你的账户。`)
};

const ja_settings_data_hint = /** @type {(inputs: Settings_Data_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存しているすべてのデータをエクスポート、またはアカウントを削除。`)
};

/**
* | output |
* | --- |
* | "Export everything we have about you, or delete your account." |
*
* @param {Settings_Data_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_data_hint = /** @type {((inputs?: Settings_Data_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Data_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_data_hint(inputs)
	if (locale === "de") return de_settings_data_hint(inputs)
	if (locale === "fr") return fr_settings_data_hint(inputs)
	if (locale === "it") return it_settings_data_hint(inputs)
	if (locale === "nl") return nl_settings_data_hint(inputs)
	if (locale === "pl") return pl_settings_data_hint(inputs)
	if (locale === "pt") return pt_settings_data_hint(inputs)
	if (locale === "ru") return ru_settings_data_hint(inputs)
	if (locale === "sv") return sv_settings_data_hint(inputs)
	if (locale === "tr") return tr_settings_data_hint(inputs)
	if (locale === "zh") return zh_settings_data_hint(inputs)
	if (locale === "ja") return ja_settings_data_hint(inputs)
	return en_settings_data_hint(inputs)
});
