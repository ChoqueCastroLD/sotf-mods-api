/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Empty_TextInputs */

const en_jams_admin_empty_text = /** @type {(inputs: Jams_Admin_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create the first Mod Jam to get started.`)
};

const es_jams_admin_empty_text = /** @type {(inputs: Jams_Admin_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea el primer Mod Jam para empezar.`)
};

const de_jams_admin_empty_text = /** @type {(inputs: Jams_Admin_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erstelle die erste Mod-Jam, um loszulegen.`)
};

const fr_jams_admin_empty_text = /** @type {(inputs: Jams_Admin_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez le premier Mod Jam pour commencer.`)
};

const it_jams_admin_empty_text = /** @type {(inputs: Jams_Admin_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea il primo Mod Jam per iniziare.`)
};

const nl_jams_admin_empty_text = /** @type {(inputs: Jams_Admin_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maak de eerste Mod Jam om te beginnen.`)
};

const pl_jams_admin_empty_text = /** @type {(inputs: Jams_Admin_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz pierwszy Mod Jam, aby zacząć.`)
};

const pt_jams_admin_empty_text = /** @type {(inputs: Jams_Admin_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie o primeiro Mod Jam para começar.`)
};

const ru_jams_admin_empty_text = /** @type {(inputs: Jams_Admin_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создайте первый мод-джем, чтобы начать.`)
};

const sv_jams_admin_empty_text = /** @type {(inputs: Jams_Admin_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa den första Mod Jam för att komma igång.`)
};

const tr_jams_admin_empty_text = /** @type {(inputs: Jams_Admin_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlamak için ilk Mod Jam'i oluşturun.`)
};

const zh_jams_admin_empty_text = /** @type {(inputs: Jams_Admin_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建第一场 Mod Jam 即可开始。`)
};

const ja_jams_admin_empty_text = /** @type {(inputs: Jams_Admin_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の Mod ジャムを作成しましょう。`)
};

/**
* | output |
* | --- |
* | "Create the first Mod Jam to get started." |
*
* @param {Jams_Admin_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_empty_text = /** @type {((inputs?: Jams_Admin_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_empty_text(inputs)
	if (locale === "de") return de_jams_admin_empty_text(inputs)
	if (locale === "fr") return fr_jams_admin_empty_text(inputs)
	if (locale === "it") return it_jams_admin_empty_text(inputs)
	if (locale === "nl") return nl_jams_admin_empty_text(inputs)
	if (locale === "pl") return pl_jams_admin_empty_text(inputs)
	if (locale === "pt") return pt_jams_admin_empty_text(inputs)
	if (locale === "ru") return ru_jams_admin_empty_text(inputs)
	if (locale === "sv") return sv_jams_admin_empty_text(inputs)
	if (locale === "tr") return tr_jams_admin_empty_text(inputs)
	if (locale === "zh") return zh_jams_admin_empty_text(inputs)
	if (locale === "ja") return ja_jams_admin_empty_text(inputs)
	return en_jams_admin_empty_text(inputs)
});
