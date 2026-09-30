/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Empty_TextInputs */

const en_admin_awards_empty_text = /** @type {(inputs: Admin_Awards_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The first Mod of the Week is chosen automatically on Monday; staff picks are yours.`)
};

const es_admin_awards_empty_text = /** @type {(inputs: Admin_Awards_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El primer Mod de la semana se elige automáticamente el lunes; las selecciones del equipo son cosa tuya.`)
};

const de_admin_awards_empty_text = /** @type {(inputs: Admin_Awards_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der erste Mod der Woche wird am Montag automatisch gewählt; Team-Tipps sind deine Sache.`)
};

const fr_admin_awards_empty_text = /** @type {(inputs: Admin_Awards_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le premier Mod de la semaine est choisi automatiquement le lundi ; les choix de l’équipe vous reviennent.`)
};

const it_admin_awards_empty_text = /** @type {(inputs: Admin_Awards_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La prima Mod della settimana viene scelta automaticamente il lunedì; le scelte dello staff spettano a te.`)
};

const nl_admin_awards_empty_text = /** @type {(inputs: Admin_Awards_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De eerste Mod van de week wordt maandag automatisch gekozen; de teamkeuzes zijn aan jou.`)
};

const pl_admin_awards_empty_text = /** @type {(inputs: Admin_Awards_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwszy Mod tygodnia zostanie wybrany automatycznie w poniedziałek; wybory zespołu należą do ciebie.`)
};

const pt_admin_awards_empty_text = /** @type {(inputs: Admin_Awards_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O primeiro Mod da semana é escolhido automaticamente na segunda-feira; as escolhas da equipe são com você.`)
};

const ru_admin_awards_empty_text = /** @type {(inputs: Admin_Awards_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первый Мод недели выбирается автоматически в понедельник; выбор команды — за вами.`)
};

const sv_admin_awards_empty_text = /** @type {(inputs: Admin_Awards_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den första Veckans modd väljs automatiskt på måndag; teamets val är upp till dig.`)
};

const tr_admin_awards_empty_text = /** @type {(inputs: Admin_Awards_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk Haftanın Modu pazartesi otomatik seçilir; ekip seçimleri sana kalmış.`)
};

const zh_admin_awards_empty_text = /** @type {(inputs: Admin_Awards_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`第一个每周模组会在周一自动评选；团队精选由你决定。`)
};

const ja_admin_awards_empty_text = /** @type {(inputs: Admin_Awards_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の今週の MOD は月曜日に自動で選ばれます。スタッフのおすすめはあなたが決めます。`)
};

/**
* | output |
* | --- |
* | "The first Mod of the Week is chosen automatically on Monday; staff picks are yours." |
*
* @param {Admin_Awards_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_empty_text = /** @type {((inputs?: Admin_Awards_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_empty_text(inputs)
	if (locale === "de") return de_admin_awards_empty_text(inputs)
	if (locale === "fr") return fr_admin_awards_empty_text(inputs)
	if (locale === "it") return it_admin_awards_empty_text(inputs)
	if (locale === "nl") return nl_admin_awards_empty_text(inputs)
	if (locale === "pl") return pl_admin_awards_empty_text(inputs)
	if (locale === "pt") return pt_admin_awards_empty_text(inputs)
	if (locale === "ru") return ru_admin_awards_empty_text(inputs)
	if (locale === "sv") return sv_admin_awards_empty_text(inputs)
	if (locale === "tr") return tr_admin_awards_empty_text(inputs)
	if (locale === "zh") return zh_admin_awards_empty_text(inputs)
	if (locale === "ja") return ja_admin_awards_empty_text(inputs)
	return en_admin_awards_empty_text(inputs)
});
