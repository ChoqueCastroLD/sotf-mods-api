/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Override_TextInputs */

const en_admin_awards_override_text = /** @type {(inputs: Admin_Awards_Override_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If a Mod of the Week already exists for these dates, this one takes its place.`)
};

const es_admin_awards_override_text = /** @type {(inputs: Admin_Awards_Override_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si ya hay un Mod de la semana para estas fechas, este ocupa su lugar.`)
};

const de_admin_awards_override_text = /** @type {(inputs: Admin_Awards_Override_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gibt es für diese Daten schon einen Mod der Woche, tritt dieser an seine Stelle.`)
};

const fr_admin_awards_override_text = /** @type {(inputs: Admin_Awards_Override_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`S’il existe déjà un Mod de la semaine pour ces dates, celui-ci prend sa place.`)
};

const it_admin_awards_override_text = /** @type {(inputs: Admin_Awards_Override_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se esiste già una Mod della settimana per queste date, questa prende il suo posto.`)
};

const nl_admin_awards_override_text = /** @type {(inputs: Admin_Awards_Override_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als er voor deze data al een Mod van de week is, neemt deze zijn plaats in.`)
};

const pl_admin_awards_override_text = /** @type {(inputs: Admin_Awards_Override_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeśli na te daty jest już Mod tygodnia, ten zajmie jego miejsce.`)
};

const pt_admin_awards_override_text = /** @type {(inputs: Admin_Awards_Override_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se já houver um Mod da semana para essas datas, este toma o lugar dele.`)
};

const ru_admin_awards_override_text = /** @type {(inputs: Admin_Awards_Override_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Если на эти даты уже есть Мод недели, этот займёт его место.`)
};

const sv_admin_awards_override_text = /** @type {(inputs: Admin_Awards_Override_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finns det redan en Veckans modd för de här datumen tar den här dess plats.`)
};

const tr_admin_awards_override_text = /** @type {(inputs: Admin_Awards_Override_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu tarihler için zaten bir Haftanın Modu varsa bu onun yerini alır.`)
};

const zh_admin_awards_override_text = /** @type {(inputs: Admin_Awards_Override_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果这些日期已有每周模组，本条将取而代之。`)
};

const ja_admin_awards_override_text = /** @type {(inputs: Admin_Awards_Override_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この日付の今週の MOD がすでにある場合、こちらに置き換わります。`)
};

/**
* | output |
* | --- |
* | "If a Mod of the Week already exists for these dates, this one takes its place." |
*
* @param {Admin_Awards_Override_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_override_text = /** @type {((inputs?: Admin_Awards_Override_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Override_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_override_text(inputs)
	if (locale === "de") return de_admin_awards_override_text(inputs)
	if (locale === "fr") return fr_admin_awards_override_text(inputs)
	if (locale === "it") return it_admin_awards_override_text(inputs)
	if (locale === "nl") return nl_admin_awards_override_text(inputs)
	if (locale === "pl") return pl_admin_awards_override_text(inputs)
	if (locale === "pt") return pt_admin_awards_override_text(inputs)
	if (locale === "ru") return ru_admin_awards_override_text(inputs)
	if (locale === "sv") return sv_admin_awards_override_text(inputs)
	if (locale === "tr") return tr_admin_awards_override_text(inputs)
	if (locale === "zh") return zh_admin_awards_override_text(inputs)
	if (locale === "ja") return ja_admin_awards_override_text(inputs)
	return en_admin_awards_override_text(inputs)
});
