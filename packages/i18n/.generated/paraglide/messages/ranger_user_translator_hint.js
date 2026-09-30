/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Translator_HintInputs */

const en_ranger_user_translator_hint = /** @type {(inputs: Ranger_User_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For people who translate the site. Only admins grant it.`)
};

const es_ranger_user_translator_hint = /** @type {(inputs: Ranger_User_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para quienes traducen el sitio. Solo la conceden los administradores.`)
};

const de_ranger_user_translator_hint = /** @type {(inputs: Ranger_User_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für Menschen, die die Seite übersetzen. Nur Admins vergeben es.`)
};

const fr_ranger_user_translator_hint = /** @type {(inputs: Ranger_User_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pour les personnes qui traduisent le site. Seuls les admins l’attribuent.`)
};

const it_ranger_user_translator_hint = /** @type {(inputs: Ranger_User_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per chi traduce il sito. Lo assegnano solo gli amministratori.`)
};

const nl_ranger_user_translator_hint = /** @type {(inputs: Ranger_User_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor mensen die de site vertalen. Alleen beheerders kennen hem toe.`)
};

const pl_ranger_user_translator_hint = /** @type {(inputs: Ranger_User_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dla osób, które tłumaczą stronę. Przyznają ją tylko administratorzy.`)
};

const pt_ranger_user_translator_hint = /** @type {(inputs: Ranger_User_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para quem traduz o site. Só os administradores a concedem.`)
};

const ru_ranger_user_translator_hint = /** @type {(inputs: Ranger_User_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для тех, кто переводит сайт. Выдают только администраторы.`)
};

const sv_ranger_user_translator_hint = /** @type {(inputs: Ranger_User_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För dem som översätter webbplatsen. Bara administratörer delar ut det.`)
};

const tr_ranger_user_translator_hint = /** @type {(inputs: Ranger_User_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siteyi çevirenler için. Yalnızca yöneticiler verir.`)
};

const zh_ranger_user_translator_hint = /** @type {(inputs: Ranger_User_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`授予翻译本站的人。仅管理员可授予。`)
};

const ja_ranger_user_translator_hint = /** @type {(inputs: Ranger_User_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイトを翻訳している人向け。管理者のみが付与できます。`)
};

/**
* | output |
* | --- |
* | "For people who translate the site. Only admins grant it." |
*
* @param {Ranger_User_Translator_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_translator_hint = /** @type {((inputs?: Ranger_User_Translator_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Translator_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_translator_hint(inputs)
	if (locale === "de") return de_ranger_user_translator_hint(inputs)
	if (locale === "fr") return fr_ranger_user_translator_hint(inputs)
	if (locale === "it") return it_ranger_user_translator_hint(inputs)
	if (locale === "nl") return nl_ranger_user_translator_hint(inputs)
	if (locale === "pl") return pl_ranger_user_translator_hint(inputs)
	if (locale === "pt") return pt_ranger_user_translator_hint(inputs)
	if (locale === "ru") return ru_ranger_user_translator_hint(inputs)
	if (locale === "sv") return sv_ranger_user_translator_hint(inputs)
	if (locale === "tr") return tr_ranger_user_translator_hint(inputs)
	if (locale === "zh") return zh_ranger_user_translator_hint(inputs)
	if (locale === "ja") return ja_ranger_user_translator_hint(inputs)
	return en_ranger_user_translator_hint(inputs)
});
