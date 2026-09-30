/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kit_Picks_TextInputs */

const en_admin_kit_picks_text = /** @type {(inputs: Admin_Kit_Picks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staff picks appear in «Essentials to get started» on the home page and as the starter kit of the install guide.`)
};

const es_admin_kit_picks_text = /** @type {(inputs: Admin_Kit_Picks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los destacados aparecen en «Imprescindibles para empezar» en la portada y como kit inicial de la guía de instalación.`)
};

const de_admin_kit_picks_text = /** @type {(inputs: Admin_Kit_Picks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Empfehlungen erscheinen unter «Das Wichtigste zum Start» auf der Startseite und als Starter-Kit der Installationsanleitung.`)
};

const fr_admin_kit_picks_text = /** @type {(inputs: Admin_Kit_Picks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les choix de l’équipe apparaissent dans «L’essentiel pour commencer» sur l’accueil et comme kit de départ du guide d’installation.`)
};

const it_admin_kit_picks_text = /** @type {(inputs: Admin_Kit_Picks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le scelte dello staff compaiono in «L’essenziale per iniziare» nella home e come kit iniziale della guida di installazione.`)
};

const nl_admin_kit_picks_text = /** @type {(inputs: Admin_Kit_Picks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teamkeuzes verschijnen bij «Essentieel om te beginnen» op de homepage en als starterskit in de installatiegids.`)
};

const pl_admin_kit_picks_text = /** @type {(inputs: Admin_Kit_Picks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybrane zestawy pojawiają się w sekcji «Niezbędnik na start» na stronie głównej i jako zestaw startowy w poradniku instalacji.`)
};

const pt_admin_kit_picks_text = /** @type {(inputs: Admin_Kit_Picks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As escolhas da equipe aparecem em «Essenciais para começar» na página inicial e como kit inicial do guia de instalação.`)
};

const ru_admin_kit_picks_text = /** @type {(inputs: Admin_Kit_Picks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбранные наборы показываются в блоке «Всё нужное для старта» на главной и как стартовый набор в руководстве по установке.`)
};

const sv_admin_kit_picks_text = /** @type {(inputs: Admin_Kit_Picks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teamets val visas under «Det viktigaste för att komma igång» på startsidan och som startkit i installationsguiden.`)
};

const tr_admin_kit_picks_text = /** @type {(inputs: Admin_Kit_Picks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekip seçimleri ana sayfadaki «Başlamak için temel paket» bölümünde ve kurulum rehberinin başlangıç kiti olarak görünür.`)
};

const zh_admin_kit_picks_text = /** @type {(inputs: Admin_Kit_Picks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`精选合集会出现在首页的「入门必备」以及安装指南的新手合集中。`)
};

const ja_admin_kit_picks_text = /** @type {(inputs: Admin_Kit_Picks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`おすすめはトップページの「始めるための必需品」とインストールガイドのスターターキットに表示されます。`)
};

/**
* | output |
* | --- |
* | "Staff picks appear in «Essentials to get started» on the home page and as the starter kit of the install guide." |
*
* @param {Admin_Kit_Picks_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_text = /** @type {((inputs?: Admin_Kit_Picks_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_text(inputs)
	if (locale === "de") return de_admin_kit_picks_text(inputs)
	if (locale === "fr") return fr_admin_kit_picks_text(inputs)
	if (locale === "it") return it_admin_kit_picks_text(inputs)
	if (locale === "nl") return nl_admin_kit_picks_text(inputs)
	if (locale === "pl") return pl_admin_kit_picks_text(inputs)
	if (locale === "pt") return pt_admin_kit_picks_text(inputs)
	if (locale === "ru") return ru_admin_kit_picks_text(inputs)
	if (locale === "sv") return sv_admin_kit_picks_text(inputs)
	if (locale === "tr") return tr_admin_kit_picks_text(inputs)
	if (locale === "zh") return zh_admin_kit_picks_text(inputs)
	if (locale === "ja") return ja_admin_kit_picks_text(inputs)
	return en_admin_kit_picks_text(inputs)
});
