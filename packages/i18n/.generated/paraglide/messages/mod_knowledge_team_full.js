/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Mod_Knowledge_Team_FullInputs */

const en_mod_knowledge_team_full = /** @type {(inputs: Mod_Knowledge_Team_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A mod can have up to ${i?.max} co-authors, including pending invitations.`)
};

const es_mod_knowledge_team_full = /** @type {(inputs: Mod_Knowledge_Team_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Un mod puede tener hasta ${i?.max} coautores, contando las invitaciones pendientes.`)
};

const de_mod_knowledge_team_full = /** @type {(inputs: Mod_Knowledge_Team_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ein Mod kann bis zu ${i?.max} Co-Autoren haben, ausstehende Einladungen eingerechnet.`)
};

const fr_mod_knowledge_team_full = /** @type {(inputs: Mod_Knowledge_Team_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Un mod peut avoir jusqu’à ${i?.max} co-auteurs, invitations en attente comprises.`)
};

const it_mod_knowledge_team_full = /** @type {(inputs: Mod_Knowledge_Team_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Un mod può avere fino a ${i?.max} coautori, inclusi gli inviti in sospeso.`)
};

const nl_mod_knowledge_team_full = /** @type {(inputs: Mod_Knowledge_Team_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Een mod kan maximaal ${i?.max} co-auteurs hebben, inclusief openstaande uitnodigingen.`)
};

const pl_mod_knowledge_team_full = /** @type {(inputs: Mod_Knowledge_Team_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod może mieć do ${i?.max} współautorów, wliczając oczekujące zaproszenia.`)
};

const pt_mod_knowledge_team_full = /** @type {(inputs: Mod_Knowledge_Team_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Um mod pode ter até ${i?.max} coautores, incluindo convites pendentes.`)
};

const ru_mod_knowledge_team_full = /** @type {(inputs: Mod_Knowledge_Team_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`У мода может быть до ${i?.max} соавторов, включая ожидающие приглашения.`)
};

const sv_mod_knowledge_team_full = /** @type {(inputs: Mod_Knowledge_Team_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En mod kan ha upp till ${i?.max} medförfattare, inklusive väntande inbjudningar.`)
};

const tr_mod_knowledge_team_full = /** @type {(inputs: Mod_Knowledge_Team_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bir modun bekleyen davetler dahil en fazla ${i?.max} ortak yazarı olabilir.`)
};

const zh_mod_knowledge_team_full = /** @type {(inputs: Mod_Knowledge_Team_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`一个模组最多可有 ${i?.max} 名共同作者（含待处理邀请）。`)
};

const ja_mod_knowledge_team_full = /** @type {(inputs: Mod_Knowledge_Team_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`1つのModには、保留中の招待を含めて最大 ${i?.max} 人まで共同制作者を設定できます。`)
};

/**
* | output |
* | --- |
* | "A mod can have up to {max} co-authors, including pending invitations." |
*
* @param {Mod_Knowledge_Team_FullInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_full = /** @type {((inputs: Mod_Knowledge_Team_FullInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_FullInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_full(inputs)
	if (locale === "de") return de_mod_knowledge_team_full(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_full(inputs)
	if (locale === "it") return it_mod_knowledge_team_full(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_full(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_full(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_full(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_full(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_full(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_full(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_full(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_full(inputs)
	return en_mod_knowledge_team_full(inputs)
});
