/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Invites_IntroInputs */

const en_mod_knowledge_invites_intro = /** @type {(inputs: Mod_Knowledge_Invites_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accept to release versions and edit the known issues and FAQ of these mods.`)
};

const es_mod_knowledge_invites_intro = /** @type {(inputs: Mod_Knowledge_Invites_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acepta para publicar versiones y editar los problemas conocidos y la FAQ de estos mods.`)
};

const de_mod_knowledge_invites_intro = /** @type {(inputs: Mod_Knowledge_Invites_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nimm an, um Versionen zu veröffentlichen und bekannte Probleme und FAQ dieser Mods zu bearbeiten.`)
};

const fr_mod_knowledge_invites_intro = /** @type {(inputs: Mod_Knowledge_Invites_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acceptez pour publier des versions et modifier les problèmes connus et la FAQ de ces mods.`)
};

const it_mod_knowledge_invites_intro = /** @type {(inputs: Mod_Knowledge_Invites_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accetta per rilasciare versioni e modificare problemi noti e FAQ di questi mod.`)
};

const nl_mod_knowledge_invites_intro = /** @type {(inputs: Mod_Knowledge_Invites_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accepteer om versies uit te brengen en de bekende problemen en FAQ van deze mods te bewerken.`)
};

const pl_mod_knowledge_invites_intro = /** @type {(inputs: Mod_Knowledge_Invites_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaakceptuj, aby wydawać wersje i edytować znane problemy oraz FAQ tych modów.`)
};

const pt_mod_knowledge_invites_intro = /** @type {(inputs: Mod_Knowledge_Invites_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aceite para lançar versões e editar os problemas conhecidos e a FAQ destes mods.`)
};

const ru_mod_knowledge_invites_intro = /** @type {(inputs: Mod_Knowledge_Invites_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Примите, чтобы выпускать версии и редактировать известные проблемы и FAQ этих модов.`)
};

const sv_mod_knowledge_invites_intro = /** @type {(inputs: Mod_Knowledge_Invites_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acceptera för att släppa versioner och redigera kända problem och FAQ för de här modsen.`)
};

const tr_mod_knowledge_invites_intro = /** @type {(inputs: Mod_Knowledge_Invites_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu modların sürümlerini yayınlamak ve bilinen sorunlarını ile SSS’sini düzenlemek için kabul et.`)
};

const zh_mod_knowledge_invites_intro = /** @type {(inputs: Mod_Knowledge_Invites_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接受后即可发布这些模组的版本，并编辑其已知问题和 FAQ。`)
};

const ja_mod_knowledge_invites_intro = /** @type {(inputs: Mod_Knowledge_Invites_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承諾すると、これらのModのバージョン公開と、既知の問題・FAQの編集ができます。`)
};

/**
* | output |
* | --- |
* | "Accept to release versions and edit the known issues and FAQ of these mods." |
*
* @param {Mod_Knowledge_Invites_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_invites_intro = /** @type {((inputs?: Mod_Knowledge_Invites_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Invites_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_invites_intro(inputs)
	if (locale === "de") return de_mod_knowledge_invites_intro(inputs)
	if (locale === "fr") return fr_mod_knowledge_invites_intro(inputs)
	if (locale === "it") return it_mod_knowledge_invites_intro(inputs)
	if (locale === "nl") return nl_mod_knowledge_invites_intro(inputs)
	if (locale === "pl") return pl_mod_knowledge_invites_intro(inputs)
	if (locale === "pt") return pt_mod_knowledge_invites_intro(inputs)
	if (locale === "ru") return ru_mod_knowledge_invites_intro(inputs)
	if (locale === "sv") return sv_mod_knowledge_invites_intro(inputs)
	if (locale === "tr") return tr_mod_knowledge_invites_intro(inputs)
	if (locale === "zh") return zh_mod_knowledge_invites_intro(inputs)
	if (locale === "ja") return ja_mod_knowledge_invites_intro(inputs)
	return en_mod_knowledge_invites_intro(inputs)
});
