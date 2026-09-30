/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Invites_Empty_TextInputs */

const en_mod_knowledge_invites_empty_text = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`When a creator invites you to co-author a mod, it shows up here.`)
};

const es_mod_knowledge_invites_empty_text = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuando un creador te invite a coescribir un mod, aparecerá aquí.`)
};

const de_mod_knowledge_invites_empty_text = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wenn dich ein Creator als Co-Autor eines Mods einlädt, erscheint das hier.`)
};

const fr_mod_knowledge_invites_empty_text = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quand un créateur vous invite à co-écrire un mod, l’invitation apparaît ici.`)
};

const it_mod_knowledge_invites_empty_text = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quando un creator ti invita a co-creare un mod, comparirà qui.`)
};

const nl_mod_knowledge_invites_empty_text = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wanneer een maker je uitnodigt als co-auteur van een mod, verschijnt dat hier.`)
};

const pl_mod_knowledge_invites_empty_text = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gdy twórca zaprosi cię do współtworzenia moda, zaproszenie pojawi się tutaj.`)
};

const pt_mod_knowledge_invites_empty_text = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quando um criador convidar você para coautorar um mod, o convite aparecerá aqui.`)
};

const ru_mod_knowledge_invites_empty_text = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Когда автор пригласит вас стать соавтором мода, приглашение появится здесь.`)
};

const sv_mod_knowledge_invites_empty_text = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`När en skapare bjuder in dig som medförfattare till en mod visas det här.`)
};

const tr_mod_knowledge_invites_empty_text = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir yapımcı seni bir modun ortak yazarı olmaya davet ettiğinde burada görünür.`)
};

const zh_mod_knowledge_invites_empty_text = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当创作者邀请你共同创作模组时，邀请会显示在这里。`)
};

const ja_mod_knowledge_invites_empty_text = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターから共同制作に招待されると、ここに表示されます。`)
};

/**
* | output |
* | --- |
* | "When a creator invites you to co-author a mod, it shows up here." |
*
* @param {Mod_Knowledge_Invites_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_invites_empty_text = /** @type {((inputs?: Mod_Knowledge_Invites_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Invites_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_invites_empty_text(inputs)
	if (locale === "de") return de_mod_knowledge_invites_empty_text(inputs)
	if (locale === "fr") return fr_mod_knowledge_invites_empty_text(inputs)
	if (locale === "it") return it_mod_knowledge_invites_empty_text(inputs)
	if (locale === "nl") return nl_mod_knowledge_invites_empty_text(inputs)
	if (locale === "pl") return pl_mod_knowledge_invites_empty_text(inputs)
	if (locale === "pt") return pt_mod_knowledge_invites_empty_text(inputs)
	if (locale === "ru") return ru_mod_knowledge_invites_empty_text(inputs)
	if (locale === "sv") return sv_mod_knowledge_invites_empty_text(inputs)
	if (locale === "tr") return tr_mod_knowledge_invites_empty_text(inputs)
	if (locale === "zh") return zh_mod_knowledge_invites_empty_text(inputs)
	if (locale === "ja") return ja_mod_knowledge_invites_empty_text(inputs)
	return en_mod_knowledge_invites_empty_text(inputs)
});
