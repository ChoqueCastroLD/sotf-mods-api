/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Diff_Sizes_OnlyInputs */

const en_mod_knowledge_diff_sizes_only = /** @type {(inputs: Mod_Knowledge_Diff_Sizes_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One of the archives was inspected without checksums, so files are compared by size only: a file that changed without changing size will not appear.`)
};

const es_mod_knowledge_diff_sizes_only = /** @type {(inputs: Mod_Knowledge_Diff_Sizes_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uno de los archivos se inspeccionó sin sumas de verificación, por lo que los ficheros se comparan solo por tamaño: un fichero que cambió sin variar de tamaño no aparecerá.`)
};

const de_mod_knowledge_diff_sizes_only = /** @type {(inputs: Mod_Knowledge_Diff_Sizes_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eines der Archive wurde ohne Prüfsummen untersucht, daher werden Dateien nur nach Größe verglichen: Eine Datei, die sich bei gleicher Größe geändert hat, erscheint nicht.`)
};

const fr_mod_knowledge_diff_sizes_only = /** @type {(inputs: Mod_Knowledge_Diff_Sizes_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une des archives a été inspectée sans somme de contrôle : les fichiers sont donc comparés par taille uniquement, et un fichier modifié sans changer de taille n’apparaîtra pas.`)
};

const it_mod_knowledge_diff_sizes_only = /** @type {(inputs: Mod_Knowledge_Diff_Sizes_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uno degli archivi è stato ispezionato senza checksum, quindi i file sono confrontati solo per dimensione: un file modificato senza cambiare dimensione non apparirà.`)
};

const nl_mod_knowledge_diff_sizes_only = /** @type {(inputs: Mod_Knowledge_Diff_Sizes_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een van de archieven is zonder controlesommen geïnspecteerd, dus bestanden worden alleen op grootte vergeleken: een bestand dat wijzigde zonder van grootte te veranderen verschijnt niet.`)
};

const pl_mod_knowledge_diff_sizes_only = /** @type {(inputs: Mod_Knowledge_Diff_Sizes_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jedno z archiwów zostało sprawdzone bez sum kontrolnych, więc pliki porównujemy tylko po rozmiarze: plik zmieniony bez zmiany rozmiaru nie pojawi się.`)
};

const pt_mod_knowledge_diff_sizes_only = /** @type {(inputs: Mod_Knowledge_Diff_Sizes_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um dos arquivos foi inspecionado sem somas de verificação, então os arquivos são comparados só pelo tamanho: um arquivo alterado sem mudar de tamanho não aparecerá.`)
};

const ru_mod_knowledge_diff_sizes_only = /** @type {(inputs: Mod_Knowledge_Diff_Sizes_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Один из архивов был проверен без контрольных сумм, поэтому файлы сравниваются только по размеру: файл, изменившийся без смены размера, не появится.`)
};

const sv_mod_knowledge_diff_sizes_only = /** @type {(inputs: Mod_Knowledge_Diff_Sizes_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett av arkiven granskades utan kontrollsummor, så filer jämförs bara efter storlek: en fil som ändrats utan att byta storlek visas inte.`)
};

const tr_mod_knowledge_diff_sizes_only = /** @type {(inputs: Mod_Knowledge_Diff_Sizes_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arşivlerden biri sağlama toplamları olmadan incelendi; bu yüzden dosyalar yalnızca boyuta göre karşılaştırılır: boyutu değişmeden değişen bir dosya görünmez.`)
};

const zh_mod_knowledge_diff_sizes_only = /** @type {(inputs: Mod_Knowledge_Diff_Sizes_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其中一个压缩包在检查时没有校验和，因此只按大小比较文件：内容变化但大小不变的文件不会显示。`)
};

const ja_mod_knowledge_diff_sizes_only = /** @type {(inputs: Mod_Knowledge_Diff_Sizes_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一方のアーカイブはチェックサムなしで検査されたため、ファイルはサイズのみで比較されます。サイズが変わらない変更は表示されません。`)
};

/**
* | output |
* | --- |
* | "One of the archives was inspected without checksums, so files are compared by size only: a file that changed without changing size will not appear." |
*
* @param {Mod_Knowledge_Diff_Sizes_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_diff_sizes_only = /** @type {((inputs?: Mod_Knowledge_Diff_Sizes_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_Sizes_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_diff_sizes_only(inputs)
	if (locale === "de") return de_mod_knowledge_diff_sizes_only(inputs)
	if (locale === "fr") return fr_mod_knowledge_diff_sizes_only(inputs)
	if (locale === "it") return it_mod_knowledge_diff_sizes_only(inputs)
	if (locale === "nl") return nl_mod_knowledge_diff_sizes_only(inputs)
	if (locale === "pl") return pl_mod_knowledge_diff_sizes_only(inputs)
	if (locale === "pt") return pt_mod_knowledge_diff_sizes_only(inputs)
	if (locale === "ru") return ru_mod_knowledge_diff_sizes_only(inputs)
	if (locale === "sv") return sv_mod_knowledge_diff_sizes_only(inputs)
	if (locale === "tr") return tr_mod_knowledge_diff_sizes_only(inputs)
	if (locale === "zh") return zh_mod_knowledge_diff_sizes_only(inputs)
	if (locale === "ja") return ja_mod_knowledge_diff_sizes_only(inputs)
	return en_mod_knowledge_diff_sizes_only(inputs)
});
