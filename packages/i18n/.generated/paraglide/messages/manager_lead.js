/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_LeadInputs */

const en_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager is a free Windows app for the mods on this site. It installs RedLoader, downloads each mod with the libraries it needs and tells you when there is an update.`)
};

const es_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager es una app gratuita para Windows hecha para los mods de este sitio. Instala RedLoader, descarga cada mod con las librerías que necesita y te avisa cuando hay una actualización.`)
};

const de_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager ist eine kostenlose Windows-App für die Mods auf dieser Seite. Sie installiert RedLoader, lädt jeden Mod mit den benötigten Bibliotheken herunter und sagt dir, wenn es ein Update gibt.`)
};

const fr_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager est une application Windows gratuite pour les mods de ce site. Elle installe RedLoader, télécharge chaque mod avec les bibliothèques nécessaires et vous prévient quand une mise à jour sort.`)
};

const it_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager è un’app gratuita per Windows pensata per le mod di questo sito. Installa RedLoader, scarica ogni mod con le librerie che le servono e ti avvisa quando c’è un aggiornamento.`)
};

const nl_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager is een gratis Windows-app voor de mods op deze site. Hij installeert RedLoader, downloadt elke mod met de libraries die hij nodig heeft en laat weten wanneer er een update is.`)
};

const pl_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager to darmowa aplikacja na Windows dla modów z tej strony. Instaluje RedLoader, pobiera każdy mod z potrzebnymi bibliotekami i daje znać, gdy wyjdzie aktualizacja.`)
};

const pt_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O SotF Mods Manager é um app gratuito para Windows feito para os mods deste site. Ele instala o RedLoader, baixa cada mod com as bibliotecas de que precisa e avisa quando sai uma atualização.`)
};

const ru_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager это бесплатное приложение для Windows для модов с этого сайта. Оно устанавливает RedLoader, скачивает каждый мод с нужными библиотеками и сообщает, когда выходит обновление.`)
};

const sv_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager är en gratis Windows-app för moddarna på den här sidan. Den installerar RedLoader, laddar ner varje modd med biblioteken den behöver och säger till när det finns en uppdatering.`)
};

const tr_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager, bu sitedeki modlar için ücretsiz bir Windows uygulamasıdır. RedLoader'ı kurar, her modu ihtiyaç duyduğu kütüphanelerle indirir ve güncelleme çıktığında haber verir.`)
};

const zh_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager 是为本站模组打造的免费 Windows 应用。它会安装 RedLoader，下载每个模组及其所需的依赖库，并在有更新时提醒你。`)
};

const ja_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager は、このサイトの Mod のための無料 Windows アプリです。RedLoader をインストールし、各 Mod を必要なライブラリと一緒にダウンロードし、更新があれば知らせます。`)
};

/**
* | output |
* | --- |
* | "SotF Mods Manager is a free Windows app for the mods on this site. It installs RedLoader, downloads each mod with the libraries it needs and tells you when t..." |
*
* @param {Manager_LeadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_lead = /** @type {((inputs?: Manager_LeadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_LeadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_lead(inputs)
	if (locale === "de") return de_manager_lead(inputs)
	if (locale === "fr") return fr_manager_lead(inputs)
	if (locale === "it") return it_manager_lead(inputs)
	if (locale === "nl") return nl_manager_lead(inputs)
	if (locale === "pl") return pl_manager_lead(inputs)
	if (locale === "pt") return pt_manager_lead(inputs)
	if (locale === "ru") return ru_manager_lead(inputs)
	if (locale === "sv") return sv_manager_lead(inputs)
	if (locale === "tr") return tr_manager_lead(inputs)
	if (locale === "zh") return zh_manager_lead(inputs)
	if (locale === "ja") return ja_manager_lead(inputs)
	return en_manager_lead(inputs)
});
