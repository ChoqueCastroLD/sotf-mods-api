/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ kind: NonNullable<unknown>, mod: NonNullable<unknown> }} Emails_Notify_Item_AwardInputs */

const en_emails_notify_item_award = /** @type {(inputs: Emails_Notify_Item_AwardInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "mod_of_week") return /** @type {LocalizedString} */ (`${i?.mod} is Mod of the Week`);
	if (i?.kind === "mod_of_month") return /** @type {LocalizedString} */ (`${i?.mod} is Mod of the Month`);
	if (i?.kind === "build_of_month") return /** @type {LocalizedString} */ (`${i?.mod} is Build of the Month`);
	return /** @type {LocalizedString} */ (`${i?.mod} is a Staff Pick`)
	
};

const es_emails_notify_item_award = /** @type {(inputs: Emails_Notify_Item_AwardInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "mod_of_week") return /** @type {LocalizedString} */ (`${i?.mod} es el Mod de la Semana`);
	if (i?.kind === "mod_of_month") return /** @type {LocalizedString} */ (`${i?.mod} es el Mod del Mes`);
	if (i?.kind === "build_of_month") return /** @type {LocalizedString} */ (`${i?.mod} es la Build del Mes`);
	return /** @type {LocalizedString} */ (`${i?.mod} es una Selección del equipo`)
	
};

const de_emails_notify_item_award = /** @type {(inputs: Emails_Notify_Item_AwardInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "mod_of_week") return /** @type {LocalizedString} */ (`${i?.mod} ist der Mod der Woche`);
	if (i?.kind === "mod_of_month") return /** @type {LocalizedString} */ (`${i?.mod} ist der Mod des Monats`);
	if (i?.kind === "build_of_month") return /** @type {LocalizedString} */ (`${i?.mod} ist der Build des Monats`);
	return /** @type {LocalizedString} */ (`${i?.mod} ist eine Empfehlung des Teams`)
	
};

const fr_emails_notify_item_award = /** @type {(inputs: Emails_Notify_Item_AwardInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "mod_of_week") return /** @type {LocalizedString} */ (`${i?.mod} est le mod de la semaine`);
	if (i?.kind === "mod_of_month") return /** @type {LocalizedString} */ (`${i?.mod} est le mod du mois`);
	if (i?.kind === "build_of_month") return /** @type {LocalizedString} */ (`${i?.mod} est la build du mois`);
	return /** @type {LocalizedString} */ (`${i?.mod} est un coup de cœur de l’équipe`)
	
};

const it_emails_notify_item_award = /** @type {(inputs: Emails_Notify_Item_AwardInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "mod_of_week") return /** @type {LocalizedString} */ (`${i?.mod} è il Mod della settimana`);
	if (i?.kind === "mod_of_month") return /** @type {LocalizedString} */ (`${i?.mod} è il Mod del mese`);
	if (i?.kind === "build_of_month") return /** @type {LocalizedString} */ (`${i?.mod} è la Build del mese`);
	return /** @type {LocalizedString} */ (`${i?.mod} è una Scelta dello staff`)
	
};

const nl_emails_notify_item_award = /** @type {(inputs: Emails_Notify_Item_AwardInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "mod_of_week") return /** @type {LocalizedString} */ (`${i?.mod} is de Mod van de week`);
	if (i?.kind === "mod_of_month") return /** @type {LocalizedString} */ (`${i?.mod} is de Mod van de maand`);
	if (i?.kind === "build_of_month") return /** @type {LocalizedString} */ (`${i?.mod} is de Build van de maand`);
	return /** @type {LocalizedString} */ (`${i?.mod} is een keuze van het team`)
	
};

const pl_emails_notify_item_award = /** @type {(inputs: Emails_Notify_Item_AwardInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "mod_of_week") return /** @type {LocalizedString} */ (`${i?.mod} to Mod tygodnia`);
	if (i?.kind === "mod_of_month") return /** @type {LocalizedString} */ (`${i?.mod} to Mod miesiąca`);
	if (i?.kind === "build_of_month") return /** @type {LocalizedString} */ (`${i?.mod} to Build miesiąca`);
	return /** @type {LocalizedString} */ (`${i?.mod} to wybór zespołu`)
	
};

const pt_emails_notify_item_award = /** @type {(inputs: Emails_Notify_Item_AwardInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "mod_of_week") return /** @type {LocalizedString} */ (`${i?.mod} é o Mod da Semana`);
	if (i?.kind === "mod_of_month") return /** @type {LocalizedString} */ (`${i?.mod} é o Mod do Mês`);
	if (i?.kind === "build_of_month") return /** @type {LocalizedString} */ (`${i?.mod} é a Build do Mês`);
	return /** @type {LocalizedString} */ (`${i?.mod} é uma Escolha da equipe`)
	
};

const ru_emails_notify_item_award = /** @type {(inputs: Emails_Notify_Item_AwardInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "mod_of_week") return /** @type {LocalizedString} */ (`${i?.mod} — мод недели`);
	if (i?.kind === "mod_of_month") return /** @type {LocalizedString} */ (`${i?.mod} — мод месяца`);
	if (i?.kind === "build_of_month") return /** @type {LocalizedString} */ (`${i?.mod} — постройка месяца`);
	return /** @type {LocalizedString} */ (`${i?.mod} — выбор команды`)
	
};

const sv_emails_notify_item_award = /** @type {(inputs: Emails_Notify_Item_AwardInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "mod_of_week") return /** @type {LocalizedString} */ (`${i?.mod} är veckans modd`);
	if (i?.kind === "mod_of_month") return /** @type {LocalizedString} */ (`${i?.mod} är månadens modd`);
	if (i?.kind === "build_of_month") return /** @type {LocalizedString} */ (`${i?.mod} är månadens bygge`);
	return /** @type {LocalizedString} */ (`${i?.mod} är ett val från teamet`)
	
};

const tr_emails_notify_item_award = /** @type {(inputs: Emails_Notify_Item_AwardInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "mod_of_week") return /** @type {LocalizedString} */ (`${i?.mod} Haftanın Modu seçildi`);
	if (i?.kind === "mod_of_month") return /** @type {LocalizedString} */ (`${i?.mod} Ayın Modu seçildi`);
	if (i?.kind === "build_of_month") return /** @type {LocalizedString} */ (`${i?.mod} Ayın Yapısı seçildi`);
	return /** @type {LocalizedString} */ (`${i?.mod} ekibin seçimi oldu`)
	
};

const zh_emails_notify_item_award = /** @type {(inputs: Emails_Notify_Item_AwardInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "mod_of_week") return /** @type {LocalizedString} */ (`${i?.mod} 获选本周模组`);
	if (i?.kind === "mod_of_month") return /** @type {LocalizedString} */ (`${i?.mod} 获选本月模组`);
	if (i?.kind === "build_of_month") return /** @type {LocalizedString} */ (`${i?.mod} 获选本月建筑`);
	return /** @type {LocalizedString} */ (`${i?.mod} 入选团队精选`)
	
};

const ja_emails_notify_item_award = /** @type {(inputs: Emails_Notify_Item_AwardInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "mod_of_week") return /** @type {LocalizedString} */ (`${i?.mod} が今週の MOD に選ばれました`);
	if (i?.kind === "mod_of_month") return /** @type {LocalizedString} */ (`${i?.mod} が今月の MOD に選ばれました`);
	if (i?.kind === "build_of_month") return /** @type {LocalizedString} */ (`${i?.mod} が今月の建築に選ばれました`);
	return /** @type {LocalizedString} */ (`${i?.mod} がスタッフのおすすめに選ばれました`)
	
};

/**
* | kind | output |
* | --- | --- |
* | "mod_of_week" | "{mod} is Mod of the Week" |
* | "mod_of_month" | "{mod} is Mod of the Month" |
* | "build_of_month" | "{mod} is Build of the Month" |
* | * | "{mod} is a Staff Pick" |
*
* @param {Emails_Notify_Item_AwardInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_award = /** @type {((inputs: Emails_Notify_Item_AwardInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_AwardInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_award(inputs)
	if (locale === "de") return de_emails_notify_item_award(inputs)
	if (locale === "fr") return fr_emails_notify_item_award(inputs)
	if (locale === "it") return it_emails_notify_item_award(inputs)
	if (locale === "nl") return nl_emails_notify_item_award(inputs)
	if (locale === "pl") return pl_emails_notify_item_award(inputs)
	if (locale === "pt") return pt_emails_notify_item_award(inputs)
	if (locale === "ru") return ru_emails_notify_item_award(inputs)
	if (locale === "sv") return sv_emails_notify_item_award(inputs)
	if (locale === "tr") return tr_emails_notify_item_award(inputs)
	if (locale === "zh") return zh_emails_notify_item_award(inputs)
	if (locale === "ja") return ja_emails_notify_item_award(inputs)
	return en_emails_notify_item_award(inputs)
});
