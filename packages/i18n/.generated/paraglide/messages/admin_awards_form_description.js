/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Form_DescriptionInputs */

const en_admin_awards_form_description = /** @type {(inputs: Admin_Awards_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The mod is announced where the award shows (landing, mod page, profile and Discord for the Mod of the Week).`)
};

const es_admin_awards_form_description = /** @type {(inputs: Admin_Awards_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El mod se anuncia donde aparece el premio (portada, página del mod, perfil y Discord en el caso del Mod de la semana).`)
};

const de_admin_awards_form_description = /** @type {(inputs: Admin_Awards_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Mod wird dort angekündigt, wo die Auszeichnung erscheint (Startseite, Mod-Seite, Profil und beim Mod der Woche auch Discord).`)
};

const fr_admin_awards_form_description = /** @type {(inputs: Admin_Awards_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mod est mis en avant là où la récompense apparaît (accueil, page du mod, profil, et Discord pour le Mod de la semaine).`)
};

const it_admin_awards_form_description = /** @type {(inputs: Admin_Awards_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La mod viene annunciata dove compare il premio (home, pagina della mod, profilo e Discord per la Mod della settimana).`)
};

const nl_admin_awards_form_description = /** @type {(inputs: Admin_Awards_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mod wordt aangekondigd waar de prijs verschijnt (startpagina, modpagina, profiel en Discord voor de Mod van de week).`)
};

const pl_admin_awards_form_description = /** @type {(inputs: Admin_Awards_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod zostanie pokazany tam, gdzie widać wyróżnienie (strona główna, strona modu, profil i Discord w przypadku Modu tygodnia).`)
};

const pt_admin_awards_form_description = /** @type {(inputs: Admin_Awards_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O mod é anunciado onde o prêmio aparece (página inicial, página do mod, perfil e Discord no caso do Mod da semana).`)
};

const ru_admin_awards_form_description = /** @type {(inputs: Admin_Awards_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод будет показан там, где видна награда (главная, страница мода, профиль, а для Мода недели ещё и Discord).`)
};

const sv_admin_awards_form_description = /** @type {(inputs: Admin_Awards_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modden lyfts fram där utmärkelsen syns (startsidan, moddsidan, profilen och Discord för Veckans modd).`)
};

const tr_admin_awards_form_description = /** @type {(inputs: Admin_Awards_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod, ödülün göründüğü yerlerde tanıtılır (ana sayfa, mod sayfası, profil ve Haftanın Modu için Discord).`)
};

const zh_admin_awards_form_description = /** @type {(inputs: Admin_Awards_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组会在奖项出现的地方展示（首页、模组页面、个人资料，每周模组还会发到 Discord）。`)
};

const ja_admin_awards_form_description = /** @type {(inputs: Admin_Awards_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アワードが表示される場所（トップページ、MOD ページ、プロフィール、今週の MOD は Discord も）で紹介されます。`)
};

/**
* | output |
* | --- |
* | "The mod is announced where the award shows (landing, mod page, profile and Discord for the Mod of the Week)." |
*
* @param {Admin_Awards_Form_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_form_description = /** @type {((inputs?: Admin_Awards_Form_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Form_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_form_description(inputs)
	if (locale === "de") return de_admin_awards_form_description(inputs)
	if (locale === "fr") return fr_admin_awards_form_description(inputs)
	if (locale === "it") return it_admin_awards_form_description(inputs)
	if (locale === "nl") return nl_admin_awards_form_description(inputs)
	if (locale === "pl") return pl_admin_awards_form_description(inputs)
	if (locale === "pt") return pt_admin_awards_form_description(inputs)
	if (locale === "ru") return ru_admin_awards_form_description(inputs)
	if (locale === "sv") return sv_admin_awards_form_description(inputs)
	if (locale === "tr") return tr_admin_awards_form_description(inputs)
	if (locale === "zh") return zh_admin_awards_form_description(inputs)
	if (locale === "ja") return ja_admin_awards_form_description(inputs)
	return en_admin_awards_form_description(inputs)
});
