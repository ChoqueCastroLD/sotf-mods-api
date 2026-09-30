/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Invites_BackInputs */

const en_mod_knowledge_invites_back = /** @type {(inputs: Mod_Knowledge_Invites_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to my mods`)
};

const es_mod_knowledge_invites_back = /** @type {(inputs: Mod_Knowledge_Invites_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver a mis mods`)
};

const de_mod_knowledge_invites_back = /** @type {(inputs: Mod_Knowledge_Invites_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zu meinen Mods`)
};

const fr_mod_knowledge_invites_back = /** @type {(inputs: Mod_Knowledge_Invites_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour à mes mods`)
};

const it_mod_knowledge_invites_back = /** @type {(inputs: Mod_Knowledge_Invites_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna ai miei mod`)
};

const nl_mod_knowledge_invites_back = /** @type {(inputs: Mod_Knowledge_Invites_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar mijn mods`)
};

const pl_mod_knowledge_invites_back = /** @type {(inputs: Mod_Knowledge_Invites_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do moich modów`)
};

const pt_mod_knowledge_invites_back = /** @type {(inputs: Mod_Knowledge_Invites_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar aos meus mods`)
};

const ru_mod_knowledge_invites_back = /** @type {(inputs: Mod_Knowledge_Invites_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`К моим модам`)
};

const sv_mod_knowledge_invites_back = /** @type {(inputs: Mod_Knowledge_Invites_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till mina mods`)
};

const tr_mod_knowledge_invites_back = /** @type {(inputs: Mod_Knowledge_Invites_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarıma dön`)
};

const zh_mod_knowledge_invites_back = /** @type {(inputs: Mod_Knowledge_Invites_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回我的模组`)
};

const ja_mod_knowledge_invites_back = /** @type {(inputs: Mod_Knowledge_Invites_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分のModに戻る`)
};

/**
* | output |
* | --- |
* | "Back to my mods" |
*
* @param {Mod_Knowledge_Invites_BackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_invites_back = /** @type {((inputs?: Mod_Knowledge_Invites_BackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Invites_BackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_invites_back(inputs)
	if (locale === "de") return de_mod_knowledge_invites_back(inputs)
	if (locale === "fr") return fr_mod_knowledge_invites_back(inputs)
	if (locale === "it") return it_mod_knowledge_invites_back(inputs)
	if (locale === "nl") return nl_mod_knowledge_invites_back(inputs)
	if (locale === "pl") return pl_mod_knowledge_invites_back(inputs)
	if (locale === "pt") return pt_mod_knowledge_invites_back(inputs)
	if (locale === "ru") return ru_mod_knowledge_invites_back(inputs)
	if (locale === "sv") return sv_mod_knowledge_invites_back(inputs)
	if (locale === "tr") return tr_mod_knowledge_invites_back(inputs)
	if (locale === "zh") return zh_mod_knowledge_invites_back(inputs)
	if (locale === "ja") return ja_mod_knowledge_invites_back(inputs)
	return en_mod_knowledge_invites_back(inputs)
});
