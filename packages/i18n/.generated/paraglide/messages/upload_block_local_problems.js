/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Block_Local_ProblemsInputs */

const en_upload_block_local_problems = /** @type {(inputs: Upload_Block_Local_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The checks below found errors. Fix them and choose the file again.`)
};

const es_upload_block_local_problems = /** @type {(inputs: Upload_Block_Local_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las comprobaciones de abajo encontraron errores. Corrígelos y vuelve a elegir el archivo.`)
};

const de_upload_block_local_problems = /** @type {(inputs: Upload_Block_Local_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Checks unten haben Fehler gefunden. Behebe sie und wähle die Datei erneut.`)
};

const fr_upload_block_local_problems = /** @type {(inputs: Upload_Block_Local_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les vérifications ci-dessous ont trouvé des erreurs. Corrigez-les et choisissez de nouveau le fichier.`)
};

const it_upload_block_local_problems = /** @type {(inputs: Upload_Block_Local_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I controlli qui sotto hanno trovato errori. Correggili e scegli di nuovo il file.`)
};

const nl_upload_block_local_problems = /** @type {(inputs: Upload_Block_Local_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De checks hieronder vonden fouten. Los ze op en kies het bestand opnieuw.`)
};

const pl_upload_block_local_problems = /** @type {(inputs: Upload_Block_Local_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrole poniżej wykryły błędy. Popraw je i wybierz plik ponownie.`)
};

const pt_upload_block_local_problems = /** @type {(inputs: Upload_Block_Local_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As verificações abaixo encontraram erros. Corrija-os e escolha o arquivo de novo.`)
};

const ru_upload_block_local_problems = /** @type {(inputs: Upload_Block_Local_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверки ниже нашли ошибки. Исправьте их и выберите файл снова.`)
};

const sv_upload_block_local_problems = /** @type {(inputs: Upload_Block_Local_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollerna nedan hittade fel. Rätta dem och välj filen igen.`)
};

const tr_upload_block_local_problems = /** @type {(inputs: Upload_Block_Local_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aşağıdaki kontroller hata buldu. Düzelt ve dosyayı yeniden seç.`)
};

const zh_upload_block_local_problems = /** @type {(inputs: Upload_Block_Local_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下方检查发现错误。修正后请重新选择文件。`)
};

const ja_upload_block_local_problems = /** @type {(inputs: Upload_Block_Local_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下のチェックでエラーが見つかりました。修正してからもう一度ファイルを選んでください。`)
};

/**
* | output |
* | --- |
* | "The checks below found errors. Fix them and choose the file again." |
*
* @param {Upload_Block_Local_ProblemsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_block_local_problems = /** @type {((inputs?: Upload_Block_Local_ProblemsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Block_Local_ProblemsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_block_local_problems(inputs)
	if (locale === "de") return de_upload_block_local_problems(inputs)
	if (locale === "fr") return fr_upload_block_local_problems(inputs)
	if (locale === "it") return it_upload_block_local_problems(inputs)
	if (locale === "nl") return nl_upload_block_local_problems(inputs)
	if (locale === "pl") return pl_upload_block_local_problems(inputs)
	if (locale === "pt") return pt_upload_block_local_problems(inputs)
	if (locale === "ru") return ru_upload_block_local_problems(inputs)
	if (locale === "sv") return sv_upload_block_local_problems(inputs)
	if (locale === "tr") return tr_upload_block_local_problems(inputs)
	if (locale === "zh") return zh_upload_block_local_problems(inputs)
	if (locale === "ja") return ja_upload_block_local_problems(inputs)
	return en_upload_block_local_problems(inputs)
});
