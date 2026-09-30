/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Delete_TextInputs */

const en_admin_awards_delete_text = /** @type {(inputs: Admin_Awards_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The award disappears from the mod page, the landing and the creator’s profile.`)
};

const es_admin_awards_delete_text = /** @type {(inputs: Admin_Awards_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El premio desaparece de la página del mod, la portada y el perfil del creador.`)
};

const de_admin_awards_delete_text = /** @type {(inputs: Admin_Awards_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Auszeichnung verschwindet von der Mod-Seite, der Startseite und dem Profil des Erstellers.`)
};

const fr_admin_awards_delete_text = /** @type {(inputs: Admin_Awards_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La récompense disparaît de la page du mod, de l’accueil et du profil du créateur.`)
};

const it_admin_awards_delete_text = /** @type {(inputs: Admin_Awards_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il premio sparisce dalla pagina della mod, dalla home e dal profilo del creatore.`)
};

const nl_admin_awards_delete_text = /** @type {(inputs: Admin_Awards_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De prijs verdwijnt van de modpagina, de startpagina en het profiel van de maker.`)
};

const pl_admin_awards_delete_text = /** @type {(inputs: Admin_Awards_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyróżnienie zniknie ze strony modu, strony głównej i profilu twórcy.`)
};

const pt_admin_awards_delete_text = /** @type {(inputs: Admin_Awards_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O prêmio some da página do mod, da página inicial e do perfil do criador.`)
};

const ru_admin_awards_delete_text = /** @type {(inputs: Admin_Awards_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Награда пропадёт со страницы мода, главной и профиля автора.`)
};

const sv_admin_awards_delete_text = /** @type {(inputs: Admin_Awards_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utmärkelsen försvinner från moddsidan, startsidan och skaparens profil.`)
};

const tr_admin_awards_delete_text = /** @type {(inputs: Admin_Awards_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ödül mod sayfasından, ana sayfadan ve yaratıcının profilinden kaybolur.`)
};

const zh_admin_awards_delete_text = /** @type {(inputs: Admin_Awards_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`奖项会从模组页面、首页和创作者个人资料中消失。`)
};

const ja_admin_awards_delete_text = /** @type {(inputs: Admin_Awards_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アワードは MOD ページ、トップページ、クリエイターのプロフィールから消えます。`)
};

/**
* | output |
* | --- |
* | "The award disappears from the mod page, the landing and the creator’s profile." |
*
* @param {Admin_Awards_Delete_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_delete_text = /** @type {((inputs?: Admin_Awards_Delete_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Delete_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_delete_text(inputs)
	if (locale === "de") return de_admin_awards_delete_text(inputs)
	if (locale === "fr") return fr_admin_awards_delete_text(inputs)
	if (locale === "it") return it_admin_awards_delete_text(inputs)
	if (locale === "nl") return nl_admin_awards_delete_text(inputs)
	if (locale === "pl") return pl_admin_awards_delete_text(inputs)
	if (locale === "pt") return pt_admin_awards_delete_text(inputs)
	if (locale === "ru") return ru_admin_awards_delete_text(inputs)
	if (locale === "sv") return sv_admin_awards_delete_text(inputs)
	if (locale === "tr") return tr_admin_awards_delete_text(inputs)
	if (locale === "zh") return zh_admin_awards_delete_text(inputs)
	if (locale === "ja") return ja_admin_awards_delete_text(inputs)
	return en_admin_awards_delete_text(inputs)
});
