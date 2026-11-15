/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Updates_TextInputs */

const en_manager_updates_text = /** @type {(inputs: Manager_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Installed and Updates tabs show what you have. A mod with a new version gets an Update button.`)
};

const es_manager_updates_text = /** @type {(inputs: Manager_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las pestañas Instalados y Actualizaciones muestran lo que tienes. Un mod con versión nueva tiene un botón Actualizar.`)
};

const de_manager_updates_text = /** @type {(inputs: Manager_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Tabs Installiert und Updates zeigen, was du hast. Ein Mod mit neuer Version bekommt einen Aktualisieren-Button.`)
};

const fr_manager_updates_text = /** @type {(inputs: Manager_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les onglets Installés et Mises à jour montrent ce que vous avez. Un mod avec une nouvelle version a un bouton Mettre à jour.`)
};

const it_manager_updates_text = /** @type {(inputs: Manager_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le schede Installate e Aggiornamenti mostrano cosa hai. Una mod con una nuova versione ha un pulsante Aggiorna.`)
};

const nl_manager_updates_text = /** @type {(inputs: Manager_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De tabbladen Geïnstalleerd en Updates tonen wat je hebt. Een mod met een nieuwe versie krijgt een knop Bijwerken.`)
};

const pl_manager_updates_text = /** @type {(inputs: Manager_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karty Zainstalowane i Aktualizacje pokazują, co masz. Mod z nową wersją dostaje przycisk Aktualizuj.`)
};

const pt_manager_updates_text = /** @type {(inputs: Manager_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As abas Instalados e Atualizações mostram o que você tem. Um mod com versão nova ganha um botão Atualizar.`)
};

const ru_manager_updates_text = /** @type {(inputs: Manager_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вкладки «Установленные» и «Обновления» показывают, что у вас есть. У мода с новой версией появляется кнопка «Обновить».`)
};

const sv_manager_updates_text = /** @type {(inputs: Manager_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flikarna Installerade och Uppdateringar visar vad du har. En modd med en ny version får en Uppdatera-knapp.`)
};

const tr_manager_updates_text = /** @type {(inputs: Manager_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurulu ve Güncellemeler sekmeleri neye sahip olduğunu gösterir. Yeni sürümü olan bir modda Güncelle düğmesi çıkar.`)
};

const zh_manager_updates_text = /** @type {(inputs: Manager_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“已安装”和“更新”标签页显示你已有的模组。有新版本的模组会出现“更新”按钮。`)
};

const ja_manager_updates_text = /** @type {(inputs: Manager_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`「インストール済み」と「アップデート」タブで持っている Mod を確認できます。新しいバージョンがある Mod には「更新」ボタンが付きます。`)
};

/**
* | output |
* | --- |
* | "The Installed and Updates tabs show what you have. A mod with a new version gets an Update button." |
*
* @param {Manager_Updates_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_updates_text = /** @type {((inputs?: Manager_Updates_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Updates_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_updates_text(inputs)
	if (locale === "de") return de_manager_updates_text(inputs)
	if (locale === "fr") return fr_manager_updates_text(inputs)
	if (locale === "it") return it_manager_updates_text(inputs)
	if (locale === "nl") return nl_manager_updates_text(inputs)
	if (locale === "pl") return pl_manager_updates_text(inputs)
	if (locale === "pt") return pt_manager_updates_text(inputs)
	if (locale === "ru") return ru_manager_updates_text(inputs)
	if (locale === "sv") return sv_manager_updates_text(inputs)
	if (locale === "tr") return tr_manager_updates_text(inputs)
	if (locale === "zh") return zh_manager_updates_text(inputs)
	if (locale === "ja") return ja_manager_updates_text(inputs)
	return en_manager_updates_text(inputs)
});
