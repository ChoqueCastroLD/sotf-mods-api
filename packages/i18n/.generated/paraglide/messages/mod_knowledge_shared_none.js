/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Shared_NoneInputs */

const en_mod_knowledge_shared_none = /** @type {(inputs: Mod_Knowledge_Shared_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have no mods shared with you yet.`)
};

const es_mod_knowledge_shared_none = /** @type {(inputs: Mod_Knowledge_Shared_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no tienes mods compartidos contigo.`)
};

const de_mod_knowledge_shared_none = /** @type {(inputs: Mod_Knowledge_Shared_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch hat niemand einen Mod mit dir geteilt.`)
};

const fr_mod_knowledge_shared_none = /** @type {(inputs: Mod_Knowledge_Shared_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod n’est encore partagé avec vous.`)
};

const it_mod_knowledge_shared_none = /** @type {(inputs: Mod_Knowledge_Shared_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun mod è ancora condiviso con te.`)
};

const nl_mod_knowledge_shared_none = /** @type {(inputs: Mod_Knowledge_Shared_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er zijn nog geen mods met je gedeeld.`)
};

const pl_mod_knowledge_shared_none = /** @type {(inputs: Mod_Knowledge_Shared_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udostępniono ci jeszcze żadnych modów.`)
};

const pt_mod_knowledge_shared_none = /** @type {(inputs: Mod_Knowledge_Shared_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você ainda não tem mods compartilhados.`)
};

const ru_mod_knowledge_shared_none = /** @type {(inputs: Mod_Knowledge_Shared_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вам пока не предоставлен доступ к модам.`)
};

const sv_mod_knowledge_shared_none = /** @type {(inputs: Mod_Knowledge_Shared_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga mods har delats med dig än.`)
};

const tr_mod_knowledge_shared_none = /** @type {(inputs: Mod_Knowledge_Shared_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seninle henüz paylaşılan mod yok.`)
};

const zh_mod_knowledge_shared_none = /** @type {(inputs: Mod_Knowledge_Shared_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有与你共享的模组。`)
};

const ja_mod_knowledge_shared_none = /** @type {(inputs: Mod_Knowledge_Shared_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共有されたModはまだありません。`)
};

/**
* | output |
* | --- |
* | "You have no mods shared with you yet." |
*
* @param {Mod_Knowledge_Shared_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_shared_none = /** @type {((inputs?: Mod_Knowledge_Shared_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Shared_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_shared_none(inputs)
	if (locale === "de") return de_mod_knowledge_shared_none(inputs)
	if (locale === "fr") return fr_mod_knowledge_shared_none(inputs)
	if (locale === "it") return it_mod_knowledge_shared_none(inputs)
	if (locale === "nl") return nl_mod_knowledge_shared_none(inputs)
	if (locale === "pl") return pl_mod_knowledge_shared_none(inputs)
	if (locale === "pt") return pt_mod_knowledge_shared_none(inputs)
	if (locale === "ru") return ru_mod_knowledge_shared_none(inputs)
	if (locale === "sv") return sv_mod_knowledge_shared_none(inputs)
	if (locale === "tr") return tr_mod_knowledge_shared_none(inputs)
	if (locale === "zh") return zh_mod_knowledge_shared_none(inputs)
	if (locale === "ja") return ja_mod_knowledge_shared_none(inputs)
	return en_mod_knowledge_shared_none(inputs)
});
