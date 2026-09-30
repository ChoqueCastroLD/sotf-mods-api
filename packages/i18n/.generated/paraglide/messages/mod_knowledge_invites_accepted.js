/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Mod_Knowledge_Invites_AcceptedInputs */

const en_mod_knowledge_invites_accepted = /** @type {(inputs: Mod_Knowledge_Invites_AcceptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You are now a co-author of ${i?.mod}`)
};

const es_mod_knowledge_invites_accepted = /** @type {(inputs: Mod_Knowledge_Invites_AcceptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ahora eres coautor de ${i?.mod}`)
};

const de_mod_knowledge_invites_accepted = /** @type {(inputs: Mod_Knowledge_Invites_AcceptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du bist jetzt Co-Autor von ${i?.mod}`)
};

const fr_mod_knowledge_invites_accepted = /** @type {(inputs: Mod_Knowledge_Invites_AcceptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous êtes maintenant co-auteur de ${i?.mod}`)
};

const it_mod_knowledge_invites_accepted = /** @type {(inputs: Mod_Knowledge_Invites_AcceptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ora sei coautore di ${i?.mod}`)
};

const nl_mod_knowledge_invites_accepted = /** @type {(inputs: Mod_Knowledge_Invites_AcceptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je bent nu co-auteur van ${i?.mod}`)
};

const pl_mod_knowledge_invites_accepted = /** @type {(inputs: Mod_Knowledge_Invites_AcceptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jesteś teraz współautorem ${i?.mod}`)
};

const pt_mod_knowledge_invites_accepted = /** @type {(inputs: Mod_Knowledge_Invites_AcceptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você agora é coautor de ${i?.mod}`)
};

const ru_mod_knowledge_invites_accepted = /** @type {(inputs: Mod_Knowledge_Invites_AcceptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Теперь вы соавтор ${i?.mod}`)
};

const sv_mod_knowledge_invites_accepted = /** @type {(inputs: Mod_Knowledge_Invites_AcceptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du är nu medförfattare till ${i?.mod}`)
};

const tr_mod_knowledge_invites_accepted = /** @type {(inputs: Mod_Knowledge_Invites_AcceptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Artık ${i?.mod} modunun ortak yazarısın`)
};

const zh_mod_knowledge_invites_accepted = /** @type {(inputs: Mod_Knowledge_Invites_AcceptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你现在是 ${i?.mod} 的共同作者`)
};

const ja_mod_knowledge_invites_accepted = /** @type {(inputs: Mod_Knowledge_Invites_AcceptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} の共同制作者になりました`)
};

/**
* | output |
* | --- |
* | "You are now a co-author of {mod}" |
*
* @param {Mod_Knowledge_Invites_AcceptedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_invites_accepted = /** @type {((inputs: Mod_Knowledge_Invites_AcceptedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Invites_AcceptedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_invites_accepted(inputs)
	if (locale === "de") return de_mod_knowledge_invites_accepted(inputs)
	if (locale === "fr") return fr_mod_knowledge_invites_accepted(inputs)
	if (locale === "it") return it_mod_knowledge_invites_accepted(inputs)
	if (locale === "nl") return nl_mod_knowledge_invites_accepted(inputs)
	if (locale === "pl") return pl_mod_knowledge_invites_accepted(inputs)
	if (locale === "pt") return pt_mod_knowledge_invites_accepted(inputs)
	if (locale === "ru") return ru_mod_knowledge_invites_accepted(inputs)
	if (locale === "sv") return sv_mod_knowledge_invites_accepted(inputs)
	if (locale === "tr") return tr_mod_knowledge_invites_accepted(inputs)
	if (locale === "zh") return zh_mod_knowledge_invites_accepted(inputs)
	if (locale === "ja") return ja_mod_knowledge_invites_accepted(inputs)
	return en_mod_knowledge_invites_accepted(inputs)
});
