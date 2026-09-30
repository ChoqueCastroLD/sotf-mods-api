/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Creator_PolicyInputs */

const en_settings_creator_policy = /** @type {(inputs: Settings_Creator_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything you publish follows the content policy.`)
};

const es_settings_creator_policy = /** @type {(inputs: Settings_Creator_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo lo que publicas sigue la política de contenidos.`)
};

const de_settings_creator_policy = /** @type {(inputs: Settings_Creator_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles, was du veröffentlichst, folgt der Inhaltsrichtlinie.`)
};

const fr_settings_creator_policy = /** @type {(inputs: Settings_Creator_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout ce que vous publiez respecte la politique de contenu.`)
};

const it_settings_creator_policy = /** @type {(inputs: Settings_Creator_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto ciò che pubblichi segue la politica sui contenuti.`)
};

const nl_settings_creator_policy = /** @type {(inputs: Settings_Creator_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles wat je publiceert volgt het inhoudsbeleid.`)
};

const pl_settings_creator_policy = /** @type {(inputs: Settings_Creator_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko, co publikujesz, podlega zasadom dotyczącym treści.`)
};

const pt_settings_creator_policy = /** @type {(inputs: Settings_Creator_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo o que você publica segue a política de conteúdo.`)
};

const ru_settings_creator_policy = /** @type {(inputs: Settings_Creator_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё, что вы публикуете, подчиняется правилам контента.`)
};

const sv_settings_creator_policy = /** @type {(inputs: Settings_Creator_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt du publicerar följer innehållspolicyn.`)
};

const tr_settings_creator_policy = /** @type {(inputs: Settings_Creator_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayımladığın her şey içerik politikasına uyar.`)
};

const zh_settings_creator_policy = /** @type {(inputs: Settings_Creator_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你发布的所有内容都须遵守内容政策。`)
};

const ja_settings_creator_policy = /** @type {(inputs: Settings_Creator_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開するものはすべてコンテンツポリシーに従います。`)
};

/**
* | output |
* | --- |
* | "Everything you publish follows the content policy." |
*
* @param {Settings_Creator_PolicyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_creator_policy = /** @type {((inputs?: Settings_Creator_PolicyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Creator_PolicyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_creator_policy(inputs)
	if (locale === "de") return de_settings_creator_policy(inputs)
	if (locale === "fr") return fr_settings_creator_policy(inputs)
	if (locale === "it") return it_settings_creator_policy(inputs)
	if (locale === "nl") return nl_settings_creator_policy(inputs)
	if (locale === "pl") return pl_settings_creator_policy(inputs)
	if (locale === "pt") return pt_settings_creator_policy(inputs)
	if (locale === "ru") return ru_settings_creator_policy(inputs)
	if (locale === "sv") return sv_settings_creator_policy(inputs)
	if (locale === "tr") return tr_settings_creator_policy(inputs)
	if (locale === "zh") return zh_settings_creator_policy(inputs)
	if (locale === "ja") return ja_settings_creator_policy(inputs)
	return en_settings_creator_policy(inputs)
});
