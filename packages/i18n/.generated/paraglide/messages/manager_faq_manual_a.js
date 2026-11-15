/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Faq_Manual_AInputs */

const en_manager_faq_manual_a = /** @type {(inputs: Manager_Faq_Manual_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`They show up in the Installed tab as Manual. The manager does not update or remove them.`)
};

const es_manager_faq_manual_a = /** @type {(inputs: Manager_Faq_Manual_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aparecen en la pestaña Instalados como Manual. El manager no los actualiza ni los quita.`)
};

const de_manager_faq_manual_a = /** @type {(inputs: Manager_Faq_Manual_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sie erscheinen im Tab Installiert als Manuell. Der Manager aktualisiert oder entfernt sie nicht.`)
};

const fr_manager_faq_manual_a = /** @type {(inputs: Manager_Faq_Manual_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ils apparaissent dans l’onglet Installés comme Manuel. Le manager ne les met pas à jour et ne les supprime pas.`)
};

const it_manager_faq_manual_a = /** @type {(inputs: Manager_Faq_Manual_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compaiono nella scheda Installate come Manuale. Il manager non le aggiorna e non le rimuove.`)
};

const nl_manager_faq_manual_a = /** @type {(inputs: Manager_Faq_Manual_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ze verschijnen in het tabblad Geïnstalleerd als Handmatig. De manager werkt ze niet bij en verwijdert ze niet.`)
};

const pl_manager_faq_manual_a = /** @type {(inputs: Manager_Faq_Manual_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pojawiają się w karcie Zainstalowane jako Ręczne. Menedżer ich nie aktualizuje ani nie usuwa.`)
};

const pt_manager_faq_manual_a = /** @type {(inputs: Manager_Faq_Manual_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eles aparecem na aba Instalados como Manual. O manager não os atualiza nem os remove.`)
};

const ru_manager_faq_manual_a = /** @type {(inputs: Manager_Faq_Manual_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Они появятся во вкладке «Установленные» с пометкой «Вручную». Менеджер не обновляет и не удаляет их.`)
};

const sv_manager_faq_manual_a = /** @type {(inputs: Manager_Faq_Manual_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De visas i fliken Installerade som Manuell. Managern uppdaterar eller tar inte bort dem.`)
};

const tr_manager_faq_manual_a = /** @type {(inputs: Manager_Faq_Manual_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurulu sekmesinde Elle olarak görünürler. Yönetici onları güncellemez ve kaldırmaz.`)
};

const zh_manager_faq_manual_a = /** @type {(inputs: Manager_Faq_Manual_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它们会在“已安装”标签页中显示为“手动”。管理器不会更新或删除它们。`)
};

const ja_manager_faq_manual_a = /** @type {(inputs: Manager_Faq_Manual_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`「インストール済み」タブに「手動」として表示されます。マネージャーは更新も削除もしません。`)
};

/**
* | output |
* | --- |
* | "They show up in the Installed tab as Manual. The manager does not update or remove them." |
*
* @param {Manager_Faq_Manual_AInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_faq_manual_a = /** @type {((inputs?: Manager_Faq_Manual_AInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Faq_Manual_AInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_faq_manual_a(inputs)
	if (locale === "de") return de_manager_faq_manual_a(inputs)
	if (locale === "fr") return fr_manager_faq_manual_a(inputs)
	if (locale === "it") return it_manager_faq_manual_a(inputs)
	if (locale === "nl") return nl_manager_faq_manual_a(inputs)
	if (locale === "pl") return pl_manager_faq_manual_a(inputs)
	if (locale === "pt") return pt_manager_faq_manual_a(inputs)
	if (locale === "ru") return ru_manager_faq_manual_a(inputs)
	if (locale === "sv") return sv_manager_faq_manual_a(inputs)
	if (locale === "tr") return tr_manager_faq_manual_a(inputs)
	if (locale === "zh") return zh_manager_faq_manual_a(inputs)
	if (locale === "ja") return ja_manager_faq_manual_a(inputs)
	return en_manager_faq_manual_a(inputs)
});
