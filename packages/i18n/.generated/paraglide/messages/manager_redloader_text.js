/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Redloader_TextInputs */

const en_manager_redloader_text = /** @type {(inputs: Manager_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install, repair, update or remove RedLoader from the settings. You can pin a version and undo the last change.`)
};

const es_manager_redloader_text = /** @type {(inputs: Manager_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instala, repara, actualiza o quita RedLoader desde los ajustes. Puedes fijar una versión y deshacer el último cambio.`)
};

const de_manager_redloader_text = /** @type {(inputs: Manager_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader in den Einstellungen installieren, reparieren, aktualisieren oder entfernen. Du kannst eine Version festlegen und die letzte Änderung rückgängig machen.`)
};

const fr_manager_redloader_text = /** @type {(inputs: Manager_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installez, réparez, mettez à jour ou supprimez RedLoader depuis les paramètres. Vous pouvez figer une version et annuler la dernière modification.`)
};

const it_manager_redloader_text = /** @type {(inputs: Manager_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa, ripara, aggiorna o rimuovi RedLoader dalle impostazioni. Puoi fissare una versione e annullare l’ultima modifica.`)
};

const nl_manager_redloader_text = /** @type {(inputs: Manager_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeer, repareer, update of verwijder RedLoader via de instellingen. Je kunt een versie vastzetten en de laatste wijziging ongedaan maken.`)
};

const pl_manager_redloader_text = /** @type {(inputs: Manager_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instaluj, naprawiaj, aktualizuj lub usuwaj RedLoader w ustawieniach. Możesz przypiąć wersję i cofnąć ostatnią zmianę.`)
};

const pt_manager_redloader_text = /** @type {(inputs: Manager_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instale, repare, atualize ou remova o RedLoader nas configurações. Dá para fixar uma versão e desfazer a última mudança.`)
};

const ru_manager_redloader_text = /** @type {(inputs: Manager_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Устанавливайте, чините, обновляйте или удаляйте RedLoader в настройках. Можно закрепить версию и отменить последнее изменение.`)
};

const sv_manager_redloader_text = /** @type {(inputs: Manager_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera, reparera, uppdatera eller ta bort RedLoader i inställningarna. Du kan låsa en version och ångra den senaste ändringen.`)
};

const tr_manager_redloader_text = /** @type {(inputs: Manager_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader'ı ayarlardan kur, onar, güncelle veya kaldır. Bir sürümü sabitleyebilir ve son değişikliği geri alabilirsin.`)
};

const zh_manager_redloader_text = /** @type {(inputs: Manager_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在设置中安装、修复、更新或移除 RedLoader。可以固定版本，也能撤销上一次更改。`)
};

const ja_manager_redloader_text = /** @type {(inputs: Manager_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定から RedLoader のインストール、修復、更新、削除ができます。バージョンの固定や直前の変更の取り消しも可能です。`)
};

/**
* | output |
* | --- |
* | "Install, repair, update or remove RedLoader from the settings. You can pin a version and undo the last change." |
*
* @param {Manager_Redloader_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_redloader_text = /** @type {((inputs?: Manager_Redloader_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Redloader_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_redloader_text(inputs)
	if (locale === "de") return de_manager_redloader_text(inputs)
	if (locale === "fr") return fr_manager_redloader_text(inputs)
	if (locale === "it") return it_manager_redloader_text(inputs)
	if (locale === "nl") return nl_manager_redloader_text(inputs)
	if (locale === "pl") return pl_manager_redloader_text(inputs)
	if (locale === "pt") return pt_manager_redloader_text(inputs)
	if (locale === "ru") return ru_manager_redloader_text(inputs)
	if (locale === "sv") return sv_manager_redloader_text(inputs)
	if (locale === "tr") return tr_manager_redloader_text(inputs)
	if (locale === "zh") return zh_manager_redloader_text(inputs)
	if (locale === "ja") return ja_manager_redloader_text(inputs)
	return en_manager_redloader_text(inputs)
});
