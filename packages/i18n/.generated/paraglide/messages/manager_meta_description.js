/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Meta_DescriptionInputs */

const en_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Free Windows app that installs mods from SOTF Mods with their libraries and RedLoader, keeps them updated and switches between mod profiles.`)
};

const es_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App gratuita para Windows que instala los mods de SOTF Mods con sus librerías y RedLoader, los mantiene actualizados y cambia entre perfiles de mods.`)
};

const de_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kostenlose Windows-App, die Mods von SOTF Mods mit ihren Bibliotheken und RedLoader installiert, aktuell hält und zwischen Mod-Profilen wechselt.`)
};

const fr_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Application Windows gratuite qui installe les mods de SOTF Mods avec leurs bibliothèques et RedLoader, les garde à jour et passe d’un profil de mods à l’autre.`)
};

const it_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App gratuita per Windows che installa le mod di SOTF Mods con le loro librerie e RedLoader, le tiene aggiornate e cambia profilo di mod.`)
};

const nl_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gratis Windows-app die mods van SOTF Mods installeert met hun libraries en RedLoader, ze up-to-date houdt en wisselt tussen modprofielen.`)
};

const pl_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Darmowa aplikacja na Windows, która instaluje mody z SOTF Mods razem z bibliotekami i RedLoaderem, aktualizuje je i przełącza profile modów.`)
};

const pt_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App gratuito para Windows que instala os mods do SOTF Mods com suas bibliotecas e o RedLoader, mantém tudo atualizado e alterna entre perfis de mods.`)
};

const ru_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Бесплатное приложение для Windows: устанавливает моды с SOTF Mods вместе с библиотеками и RedLoader, обновляет их и переключает профили модов.`)
};

const sv_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gratis Windows-app som installerar moddar från SOTF Mods med deras bibliotek och RedLoader, håller dem uppdaterade och växlar mellan moddprofiler.`)
};

const tr_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods'taki modları kütüphaneleri ve RedLoader ile kuran, güncel tutan ve mod profilleri arasında geçiş yapan ücretsiz Windows uygulaması.`)
};

const zh_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`免费的 Windows 应用，安装 SOTF Mods 上的模组及其依赖库和 RedLoader，保持更新，并在模组配置之间切换。`)
};

const ja_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods の Mod をライブラリや RedLoader と一緒にインストールし、最新に保ち、Mod プロファイルを切り替える無料の Windows アプリ。`)
};

/**
* | output |
* | --- |
* | "Free Windows app that installs mods from SOTF Mods with their libraries and RedLoader, keeps them updated and switches between mod profiles." |
*
* @param {Manager_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_meta_description = /** @type {((inputs?: Manager_Meta_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Meta_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_meta_description(inputs)
	if (locale === "de") return de_manager_meta_description(inputs)
	if (locale === "fr") return fr_manager_meta_description(inputs)
	if (locale === "it") return it_manager_meta_description(inputs)
	if (locale === "nl") return nl_manager_meta_description(inputs)
	if (locale === "pl") return pl_manager_meta_description(inputs)
	if (locale === "pt") return pt_manager_meta_description(inputs)
	if (locale === "ru") return ru_manager_meta_description(inputs)
	if (locale === "sv") return sv_manager_meta_description(inputs)
	if (locale === "tr") return tr_manager_meta_description(inputs)
	if (locale === "zh") return zh_manager_meta_description(inputs)
	if (locale === "ja") return ja_manager_meta_description(inputs)
	return en_manager_meta_description(inputs)
});
