/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_App_LinksInputs */

const en_manager_app_links = /** @type {(inputs: Manager_App_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod and build pages on this site have an Install with launcher button that opens the manager on that mod.`)
};

const es_manager_app_links = /** @type {(inputs: Manager_App_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las páginas de mods y builds de este sitio tienen un botón Instalar con el launcher que abre el manager en ese mod.`)
};

const de_manager_app_links = /** @type {(inputs: Manager_App_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod- und Build-Seiten auf dieser Seite haben einen Button Mit Launcher installieren, der den Manager bei diesem Mod öffnet.`)
};

const fr_manager_app_links = /** @type {(inputs: Manager_App_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les pages de mods et de builds de ce site ont un bouton Installer avec le launcher qui ouvre le manager sur ce mod.`)
};

const it_manager_app_links = /** @type {(inputs: Manager_App_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le pagine di mod e build di questo sito hanno un pulsante Installa con il launcher che apre il manager su quella mod.`)
};

const nl_manager_app_links = /** @type {(inputs: Manager_App_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod- en buildpagina’s op deze site hebben een knop Installeren met launcher die de manager op die mod opent.`)
};

const pl_manager_app_links = /** @type {(inputs: Manager_App_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strony modów i buildów na tej stronie mają przycisk Zainstaluj launcherem, który otwiera menedżer na tym modzie.`)
};

const pt_manager_app_links = /** @type {(inputs: Manager_App_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As páginas de mods e builds deste site têm um botão Instalar com o launcher que abre o manager nesse mod.`)
};

const ru_manager_app_links = /** @type {(inputs: Manager_App_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На страницах модов и построек на этом сайте есть кнопка «Установить через лаунчер», которая открывает менеджер на этом моде.`)
};

const sv_manager_app_links = /** @type {(inputs: Manager_App_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modd- och byggsidor på den här sidan har en knapp Installera med launchern som öppnar managern på den modden.`)
};

const tr_manager_app_links = /** @type {(inputs: Manager_App_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sitedeki mod ve yapı sayfalarında, yöneticiyi o modda açan bir Başlatıcıyla kur düğmesi var.`)
};

const zh_manager_app_links = /** @type {(inputs: Manager_App_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本站的模组和建筑页面都有“用启动器安装”按钮，可直接在管理器中打开该模组。`)
};

const ja_manager_app_links = /** @type {(inputs: Manager_App_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このサイトの Mod と建築のページには「ランチャーでインストール」ボタンがあり、その Mod をマネージャーで開けます。`)
};

/**
* | output |
* | --- |
* | "Mod and build pages on this site have an Install with launcher button that opens the manager on that mod." |
*
* @param {Manager_App_LinksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_app_links = /** @type {((inputs?: Manager_App_LinksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_App_LinksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_app_links(inputs)
	if (locale === "de") return de_manager_app_links(inputs)
	if (locale === "fr") return fr_manager_app_links(inputs)
	if (locale === "it") return it_manager_app_links(inputs)
	if (locale === "nl") return nl_manager_app_links(inputs)
	if (locale === "pl") return pl_manager_app_links(inputs)
	if (locale === "pt") return pt_manager_app_links(inputs)
	if (locale === "ru") return ru_manager_app_links(inputs)
	if (locale === "sv") return sv_manager_app_links(inputs)
	if (locale === "tr") return tr_manager_app_links(inputs)
	if (locale === "zh") return zh_manager_app_links(inputs)
	if (locale === "ja") return ja_manager_app_links(inputs)
	return en_manager_app_links(inputs)
});
