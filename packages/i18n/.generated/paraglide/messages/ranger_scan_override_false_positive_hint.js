/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_Override_False_Positive_HintInputs */

const en_ranger_scan_override_false_positive_hint = /** @type {(inputs: Ranger_Scan_Override_False_Positive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You checked the files: the detections are false positives. A version held by the scan is released.`)
};

const es_ranger_scan_override_false_positive_hint = /** @type {(inputs: Ranger_Scan_Override_False_Positive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Has revisado los archivos: las detecciones son falsos positivos. Se libera la versión retenida por el análisis.`)
};

const de_ranger_scan_override_false_positive_hint = /** @type {(inputs: Ranger_Scan_Override_False_Positive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast die Dateien geprüft: Die Treffer sind Fehlalarme. Eine vom Scan zurückgehaltene Version wird freigegeben.`)
};

const fr_ranger_scan_override_false_positive_hint = /** @type {(inputs: Ranger_Scan_Override_False_Positive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez vérifié les fichiers : les détections sont des faux positifs. Une version retenue par l’analyse est libérée.`)
};

const it_ranger_scan_override_false_positive_hint = /** @type {(inputs: Ranger_Scan_Override_False_Positive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai controllato i file: i rilevamenti sono falsi positivi. La versione trattenuta dall’analisi viene rilasciata.`)
};

const nl_ranger_scan_override_false_positive_hint = /** @type {(inputs: Ranger_Scan_Override_False_Positive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt de bestanden gecontroleerd: de detecties zijn vals positief. Een door de scan tegengehouden versie wordt vrijgegeven.`)
};

const pl_ranger_scan_override_false_positive_hint = /** @type {(inputs: Ranger_Scan_Override_False_Positive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdziłeś pliki: wykrycia to fałszywe alarmy. Wersja wstrzymana przez skan zostaje zwolniona.`)
};

const pt_ranger_scan_override_false_positive_hint = /** @type {(inputs: Ranger_Scan_Override_False_Positive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você conferiu os arquivos: as detecções são falsos positivos. A versão retida pela análise é liberada.`)
};

const ru_ranger_scan_override_false_positive_hint = /** @type {(inputs: Ranger_Scan_Override_False_Positive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы проверили файлы: срабатывания ложные. Версия, задержанная сканированием, будет выпущена.`)
};

const sv_ranger_scan_override_false_positive_hint = /** @type {(inputs: Ranger_Scan_Override_False_Positive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har kontrollerat filerna: träffarna är falsklarm. En version som skanningen höll kvar släpps.`)
};

const tr_ranger_scan_override_false_positive_hint = /** @type {(inputs: Ranger_Scan_Override_False_Positive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosyaları kontrol ettiniz: tespitler yanlış pozitif. Taramanın beklettiği sürüm serbest bırakılır.`)
};

const zh_ranger_scan_override_false_positive_hint = /** @type {(inputs: Ranger_Scan_Override_False_Positive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已检查文件：检出为误报。被扫描暂扣的版本将被放行。`)
};

const ja_ranger_scan_override_false_positive_hint = /** @type {(inputs: Ranger_Scan_Override_False_Positive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルを確認した結果、検出は誤検出です。スキャンで保留されたバージョンが解放されます。`)
};

/**
* | output |
* | --- |
* | "You checked the files: the detections are false positives. A version held by the scan is released." |
*
* @param {Ranger_Scan_Override_False_Positive_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_override_false_positive_hint = /** @type {((inputs?: Ranger_Scan_Override_False_Positive_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_Override_False_Positive_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_override_false_positive_hint(inputs)
	if (locale === "de") return de_ranger_scan_override_false_positive_hint(inputs)
	if (locale === "fr") return fr_ranger_scan_override_false_positive_hint(inputs)
	if (locale === "it") return it_ranger_scan_override_false_positive_hint(inputs)
	if (locale === "nl") return nl_ranger_scan_override_false_positive_hint(inputs)
	if (locale === "pl") return pl_ranger_scan_override_false_positive_hint(inputs)
	if (locale === "pt") return pt_ranger_scan_override_false_positive_hint(inputs)
	if (locale === "ru") return ru_ranger_scan_override_false_positive_hint(inputs)
	if (locale === "sv") return sv_ranger_scan_override_false_positive_hint(inputs)
	if (locale === "tr") return tr_ranger_scan_override_false_positive_hint(inputs)
	if (locale === "zh") return zh_ranger_scan_override_false_positive_hint(inputs)
	if (locale === "ja") return ja_ranger_scan_override_false_positive_hint(inputs)
	return en_ranger_scan_override_false_positive_hint(inputs)
});
