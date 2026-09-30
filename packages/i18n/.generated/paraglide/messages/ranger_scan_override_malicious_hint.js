/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_Override_Malicious_HintInputs */

const en_ranger_scan_override_malicious_hint = /** @type {(inputs: Ranger_Scan_Override_Malicious_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file is harmful. The version is pulled and stays unavailable.`)
};

const es_ranger_scan_override_malicious_hint = /** @type {(inputs: Ranger_Scan_Override_Malicious_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El archivo es dañino. La versión se retira y deja de estar disponible.`)
};

const de_ranger_scan_override_malicious_hint = /** @type {(inputs: Ranger_Scan_Override_Malicious_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei ist schädlich. Die Version wird zurückgezogen und bleibt nicht verfügbar.`)
};

const fr_ranger_scan_override_malicious_hint = /** @type {(inputs: Ranger_Scan_Override_Malicious_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier est nuisible. La version est retirée et reste indisponible.`)
};

const it_ranger_scan_override_malicious_hint = /** @type {(inputs: Ranger_Scan_Override_Malicious_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file è dannoso. La versione viene ritirata e resta non disponibile.`)
};

const nl_ranger_scan_override_malicious_hint = /** @type {(inputs: Ranger_Scan_Override_Malicious_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand is schadelijk. De versie wordt teruggetrokken en blijft onbeschikbaar.`)
};

const pl_ranger_scan_override_malicious_hint = /** @type {(inputs: Ranger_Scan_Override_Malicious_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik jest szkodliwy. Wersja zostaje wycofana i pozostaje niedostępna.`)
};

const pt_ranger_scan_override_malicious_hint = /** @type {(inputs: Ranger_Scan_Override_Malicious_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo é nocivo. A versão é retirada e fica indisponível.`)
};

const ru_ranger_scan_override_malicious_hint = /** @type {(inputs: Ranger_Scan_Override_Malicious_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл вредоносный. Версия отзывается и остаётся недоступной.`)
};

const sv_ranger_scan_override_malicious_hint = /** @type {(inputs: Ranger_Scan_Override_Malicious_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen är skadlig. Versionen dras tillbaka och förblir otillgänglig.`)
};

const tr_ranger_scan_override_malicious_hint = /** @type {(inputs: Ranger_Scan_Override_Malicious_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya zararlı. Sürüm geri çekilir ve erişilemez kalır.`)
};

const zh_ranger_scan_override_malicious_hint = /** @type {(inputs: Ranger_Scan_Override_Malicious_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件有害。该版本将被撤下并保持不可用。`)
};

const ja_ranger_scan_override_malicious_hint = /** @type {(inputs: Ranger_Scan_Override_Malicious_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルは有害です。バージョンは取り下げられ、利用できないままになります。`)
};

/**
* | output |
* | --- |
* | "The file is harmful. The version is pulled and stays unavailable." |
*
* @param {Ranger_Scan_Override_Malicious_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_override_malicious_hint = /** @type {((inputs?: Ranger_Scan_Override_Malicious_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_Override_Malicious_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_override_malicious_hint(inputs)
	if (locale === "de") return de_ranger_scan_override_malicious_hint(inputs)
	if (locale === "fr") return fr_ranger_scan_override_malicious_hint(inputs)
	if (locale === "it") return it_ranger_scan_override_malicious_hint(inputs)
	if (locale === "nl") return nl_ranger_scan_override_malicious_hint(inputs)
	if (locale === "pl") return pl_ranger_scan_override_malicious_hint(inputs)
	if (locale === "pt") return pt_ranger_scan_override_malicious_hint(inputs)
	if (locale === "ru") return ru_ranger_scan_override_malicious_hint(inputs)
	if (locale === "sv") return sv_ranger_scan_override_malicious_hint(inputs)
	if (locale === "tr") return tr_ranger_scan_override_malicious_hint(inputs)
	if (locale === "zh") return zh_ranger_scan_override_malicious_hint(inputs)
	if (locale === "ja") return ja_ranger_scan_override_malicious_hint(inputs)
	return en_ranger_scan_override_malicious_hint(inputs)
});
