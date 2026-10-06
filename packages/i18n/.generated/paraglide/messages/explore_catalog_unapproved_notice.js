/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Unapproved_NoticeInputs */

const en_explore_catalog_unapproved_notice = /** @type {(inputs: Explore_Catalog_Unapproved_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`These mods passed the automated checks and are waiting for a moderator to approve them. They are not part of the main list.`)
};

const es_explore_catalog_unapproved_notice = /** @type {(inputs: Explore_Catalog_Unapproved_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estos mods superaron las comprobaciones automáticas y esperan la aprobación de un moderador. No forman parte de la lista principal.`)
};

const de_explore_catalog_unapproved_notice = /** @type {(inputs: Explore_Catalog_Unapproved_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Mods haben die automatischen Prüfungen bestanden und warten auf die Freigabe durch einen Moderator. Sie gehören nicht zur Hauptliste.`)
};

const fr_explore_catalog_unapproved_notice = /** @type {(inputs: Explore_Catalog_Unapproved_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ces mods ont réussi les vérifications automatiques et attendent l’approbation d’un modérateur. Ils ne font pas partie de la liste principale.`)
};

const it_explore_catalog_unapproved_notice = /** @type {(inputs: Explore_Catalog_Unapproved_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questi mod hanno superato i controlli automatici e attendono l’approvazione di un moderatore. Non fanno parte dell’elenco principale.`)
};

const nl_explore_catalog_unapproved_notice = /** @type {(inputs: Explore_Catalog_Unapproved_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze mods hebben de automatische controles doorstaan en wachten op goedkeuring door een moderator. Ze maken geen deel uit van de hoofdlijst.`)
};

const pl_explore_catalog_unapproved_notice = /** @type {(inputs: Explore_Catalog_Unapproved_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te mody przeszły automatyczne kontrole i czekają na zatwierdzenie przez moderatora. Nie należą do głównej listy.`)
};

const pt_explore_catalog_unapproved_notice = /** @type {(inputs: Explore_Catalog_Unapproved_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estes mods passaram nas verificações automáticas e aguardam a aprovação de um moderador. Eles não fazem parte da lista principal.`)
};

const ru_explore_catalog_unapproved_notice = /** @type {(inputs: Explore_Catalog_Unapproved_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эти моды прошли автоматические проверки и ждут одобрения модератора. Они не входят в основной список.`)
};

const sv_explore_catalog_unapproved_notice = /** @type {(inputs: Explore_Catalog_Unapproved_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De här mods har klarat de automatiska kontrollerna och väntar på att en moderator ska godkänna dem. De ingår inte i huvudlistan.`)
};

const tr_explore_catalog_unapproved_notice = /** @type {(inputs: Explore_Catalog_Unapproved_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu modlar otomatik kontrolleri geçti ve bir moderatörün onayını bekliyor. Ana listenin parçası değiller.`)
};

const zh_explore_catalog_unapproved_notice = /** @type {(inputs: Explore_Catalog_Unapproved_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这些模组已通过自动检查，正在等待管理员批准。它们不属于主列表。`)
};

const ja_explore_catalog_unapproved_notice = /** @type {(inputs: Explore_Catalog_Unapproved_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これらのMODは自動チェックを通過し、モデレーターの承認を待っています。メインのリストには含まれません。`)
};

/**
* | output |
* | --- |
* | "These mods passed the automated checks and are waiting for a moderator to approve them. They are not part of the main list." |
*
* @param {Explore_Catalog_Unapproved_NoticeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_unapproved_notice = /** @type {((inputs?: Explore_Catalog_Unapproved_NoticeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Unapproved_NoticeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_unapproved_notice(inputs)
	if (locale === "de") return de_explore_catalog_unapproved_notice(inputs)
	if (locale === "fr") return fr_explore_catalog_unapproved_notice(inputs)
	if (locale === "it") return it_explore_catalog_unapproved_notice(inputs)
	if (locale === "nl") return nl_explore_catalog_unapproved_notice(inputs)
	if (locale === "pl") return pl_explore_catalog_unapproved_notice(inputs)
	if (locale === "pt") return pt_explore_catalog_unapproved_notice(inputs)
	if (locale === "ru") return ru_explore_catalog_unapproved_notice(inputs)
	if (locale === "sv") return sv_explore_catalog_unapproved_notice(inputs)
	if (locale === "tr") return tr_explore_catalog_unapproved_notice(inputs)
	if (locale === "zh") return zh_explore_catalog_unapproved_notice(inputs)
	if (locale === "ja") return ja_explore_catalog_unapproved_notice(inputs)
	return en_explore_catalog_unapproved_notice(inputs)
});
