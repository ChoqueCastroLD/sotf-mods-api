/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Faq_Slow_AInputs */

const en_manager_faq_slow_a = /** @type {(inputs: Manager_Faq_Slow_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Microsoft Defender scans every RedLoader file the first time. The Defender exclusion option in the settings skips that scan.`)
};

const es_manager_faq_slow_a = /** @type {(inputs: Manager_Faq_Slow_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Microsoft Defender analiza cada archivo de RedLoader la primera vez. La opción de exclusión de Defender en los ajustes evita ese análisis.`)
};

const de_manager_faq_slow_a = /** @type {(inputs: Manager_Faq_Slow_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Microsoft Defender scannt beim ersten Mal jede RedLoader-Datei. Die Option Defender-Ausnahme in den Einstellungen überspringt diesen Scan.`)
};

const fr_manager_faq_slow_a = /** @type {(inputs: Manager_Faq_Slow_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Microsoft Defender analyse chaque fichier de RedLoader la première fois. L’option d’exclusion Defender dans les paramètres évite cette analyse.`)
};

const it_manager_faq_slow_a = /** @type {(inputs: Manager_Faq_Slow_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Microsoft Defender analizza ogni file di RedLoader la prima volta. L’opzione di esclusione di Defender nelle impostazioni salta quell’analisi.`)
};

const nl_manager_faq_slow_a = /** @type {(inputs: Manager_Faq_Slow_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Microsoft Defender scant de eerste keer elk RedLoader-bestand. De optie Defender-uitzondering in de instellingen slaat die scan over.`)
};

const pl_manager_faq_slow_a = /** @type {(inputs: Manager_Faq_Slow_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Microsoft Defender za pierwszym razem skanuje każdy plik RedLoadera. Opcja wykluczenia w Defenderze w ustawieniach pomija to skanowanie.`)
};

const pt_manager_faq_slow_a = /** @type {(inputs: Manager_Faq_Slow_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O Microsoft Defender analisa cada arquivo do RedLoader na primeira vez. A opção de exclusão do Defender nas configurações pula essa análise.`)
};

const ru_manager_faq_slow_a = /** @type {(inputs: Manager_Faq_Slow_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Microsoft Defender при первом запуске проверяет каждый файл RedLoader. Параметр исключения Defender в настройках пропускает эту проверку.`)
};

const sv_manager_faq_slow_a = /** @type {(inputs: Manager_Faq_Slow_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Microsoft Defender skannar varje RedLoader-fil första gången. Alternativet Defender-undantag i inställningarna hoppar över den skanningen.`)
};

const tr_manager_faq_slow_a = /** @type {(inputs: Manager_Faq_Slow_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Microsoft Defender ilk seferde her RedLoader dosyasını tarar. Ayarlardaki Defender istisnası seçeneği bu taramayı atlar.`)
};

const zh_manager_faq_slow_a = /** @type {(inputs: Manager_Faq_Slow_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Microsoft Defender 首次会扫描每个 RedLoader 文件。设置中的 Defender 排除选项可以跳过这次扫描。`)
};

const ja_manager_faq_slow_a = /** @type {(inputs: Manager_Faq_Slow_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Microsoft Defender が初回に RedLoader のファイルをすべてスキャンするためです。設定の Defender 除外オプションでこのスキャンを省けます。`)
};

/**
* | output |
* | --- |
* | "Microsoft Defender scans every RedLoader file the first time. The Defender exclusion option in the settings skips that scan." |
*
* @param {Manager_Faq_Slow_AInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_faq_slow_a = /** @type {((inputs?: Manager_Faq_Slow_AInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Faq_Slow_AInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_faq_slow_a(inputs)
	if (locale === "de") return de_manager_faq_slow_a(inputs)
	if (locale === "fr") return fr_manager_faq_slow_a(inputs)
	if (locale === "it") return it_manager_faq_slow_a(inputs)
	if (locale === "nl") return nl_manager_faq_slow_a(inputs)
	if (locale === "pl") return pl_manager_faq_slow_a(inputs)
	if (locale === "pt") return pt_manager_faq_slow_a(inputs)
	if (locale === "ru") return ru_manager_faq_slow_a(inputs)
	if (locale === "sv") return sv_manager_faq_slow_a(inputs)
	if (locale === "tr") return tr_manager_faq_slow_a(inputs)
	if (locale === "zh") return zh_manager_faq_slow_a(inputs)
	if (locale === "ja") return ja_manager_faq_slow_a(inputs)
	return en_manager_faq_slow_a(inputs)
});
