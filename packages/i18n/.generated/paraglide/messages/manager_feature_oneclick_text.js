/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Feature_Oneclick_TextInputs */

const en_manager_feature_oneclick_text = /** @type {(inputs: Manager_Feature_Oneclick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Click «Install with SotF Mods Manager» on any mod page and the manager downloads it with its dependencies.`)
};

const es_manager_feature_oneclick_text = /** @type {(inputs: Manager_Feature_Oneclick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haz clic en «Instalar con SotF Mods Manager» en la página de cualquier mod y el manager lo descarga con sus dependencias.`)
};

const de_manager_feature_oneclick_text = /** @type {(inputs: Manager_Feature_Oneclick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klicke auf einer Mod-Seite auf „Mit SotF Mods Manager installieren“ und der Manager lädt den Mod samt Abhängigkeiten herunter.`)
};

const fr_manager_feature_oneclick_text = /** @type {(inputs: Manager_Feature_Oneclick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliquez sur « Installer avec SotF Mods Manager » sur la page d’un mod et le manager le télécharge avec ses dépendances.`)
};

const it_manager_feature_oneclick_text = /** @type {(inputs: Manager_Feature_Oneclick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clicca «Installa con SotF Mods Manager» nella pagina di una mod e il manager la scarica con le sue dipendenze.`)
};

const nl_manager_feature_oneclick_text = /** @type {(inputs: Manager_Feature_Oneclick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klik op ‘Installeren met SotF Mods Manager’ op een modpagina en de manager downloadt de mod met zijn afhankelijkheden.`)
};

const pl_manager_feature_oneclick_text = /** @type {(inputs: Manager_Feature_Oneclick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kliknij „Zainstaluj przez SotF Mods Manager” na stronie dowolnego moda, a menedżer pobierze go razem z zależnościami.`)
};

const pt_manager_feature_oneclick_text = /** @type {(inputs: Manager_Feature_Oneclick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clique em “Instalar com o SotF Mods Manager” na página de qualquer mod e o manager baixa o mod com suas dependências.`)
};

const ru_manager_feature_oneclick_text = /** @type {(inputs: Manager_Feature_Oneclick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нажмите «Установить через SotF Mods Manager» на странице мода, и менеджер скачает его вместе с зависимостями.`)
};

const sv_manager_feature_oneclick_text = /** @type {(inputs: Manager_Feature_Oneclick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klicka på ”Installera med SotF Mods Manager” på en moddsida så laddar managern ner modden med dess beroenden.`)
};

const tr_manager_feature_oneclick_text = /** @type {(inputs: Manager_Feature_Oneclick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herhangi bir mod sayfasında “SotF Mods Manager ile kur”a tıkla, yönetici modu bağımlılıklarıyla birlikte indirir.`)
};

const zh_manager_feature_oneclick_text = /** @type {(inputs: Manager_Feature_Oneclick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在任意模组页面点击“用 SotF Mods Manager 安装”，管理器会连同依赖一起下载。`)
};

const ja_manager_feature_oneclick_text = /** @type {(inputs: Manager_Feature_Oneclick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ページで「SotF Mods Manager でインストール」をクリックすると、依存関係ごとダウンロードされます。`)
};

/**
* | output |
* | --- |
* | "Click «Install with SotF Mods Manager» on any mod page and the manager downloads it with its dependencies." |
*
* @param {Manager_Feature_Oneclick_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_feature_oneclick_text = /** @type {((inputs?: Manager_Feature_Oneclick_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Feature_Oneclick_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_feature_oneclick_text(inputs)
	if (locale === "de") return de_manager_feature_oneclick_text(inputs)
	if (locale === "fr") return fr_manager_feature_oneclick_text(inputs)
	if (locale === "it") return it_manager_feature_oneclick_text(inputs)
	if (locale === "nl") return nl_manager_feature_oneclick_text(inputs)
	if (locale === "pl") return pl_manager_feature_oneclick_text(inputs)
	if (locale === "pt") return pt_manager_feature_oneclick_text(inputs)
	if (locale === "ru") return ru_manager_feature_oneclick_text(inputs)
	if (locale === "sv") return sv_manager_feature_oneclick_text(inputs)
	if (locale === "tr") return tr_manager_feature_oneclick_text(inputs)
	if (locale === "zh") return zh_manager_feature_oneclick_text(inputs)
	if (locale === "ja") return ja_manager_feature_oneclick_text(inputs)
	return en_manager_feature_oneclick_text(inputs)
});
