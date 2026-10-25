/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Free_NoteInputs */

const en_upload_free_note = /** @type {(inputs: Upload_Free_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any file type. The file gets the security checks only (no RedLoader manifest needed). You type the version number in the Release step.`)
};

const es_upload_free_note = /** @type {(inputs: Upload_Free_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquier tipo de archivo. El archivo solo pasa los controles de seguridad (no hace falta manifiesto de RedLoader). El número de versión lo escribes en el paso Publicación.`)
};

const de_upload_free_note = /** @type {(inputs: Upload_Free_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder Dateityp. Die Datei wird nur auf Sicherheit geprüft (kein RedLoader-Manifest nötig). Die Versionsnummer gibst du im Schritt Veröffentlichung ein.`)
};

const fr_upload_free_note = /** @type {(inputs: Upload_Free_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout type de fichier. Le fichier passe seulement les contrôles de sécurité (pas de manifeste RedLoader). Vous saisissez le numéro de version à l’étape Publication.`)
};

const it_upload_free_note = /** @type {(inputs: Upload_Free_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi tipo di file. Il file riceve solo i controlli di sicurezza (non serve il manifest di RedLoader). Il numero di versione lo scrivi nel passaggio Pubblicazione.`)
};

const nl_upload_free_note = /** @type {(inputs: Upload_Free_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elk bestandstype. Het bestand krijgt alleen de veiligheidscontroles (geen RedLoader-manifest nodig). Het versienummer vul je in bij de stap Publiceren.`)
};

const pl_upload_free_note = /** @type {(inputs: Upload_Free_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolny typ pliku. Plik przechodzi tylko kontrole bezpieczeństwa (manifest RedLoadera nie jest potrzebny). Numer wersji wpisujesz w kroku Publikacja.`)
};

const pt_upload_free_note = /** @type {(inputs: Upload_Free_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer tipo de arquivo. O arquivo passa apenas pelas verificações de segurança (não precisa de manifesto do RedLoader). Você digita o número da versão na etapa Publicação.`)
};

const ru_upload_free_note = /** @type {(inputs: Upload_Free_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подойдёт любой тип файла. Файл проходит только проверки безопасности (манифест RedLoader не нужен). Номер версии вы укажете на шаге «Публикация».`)
};

const sv_upload_free_note = /** @type {(inputs: Upload_Free_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valfri filtyp. Filen får bara säkerhetskontrollerna (inget RedLoader-manifest behövs). Versionsnumret skriver du i steget Publicering.`)
};

const tr_upload_free_note = /** @type {(inputs: Upload_Free_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her dosya türü olur. Dosya yalnızca güvenlik kontrollerinden geçer (RedLoader manifesti gerekmez). Sürüm numarasını Yayın adımında yazarsın.`)
};

const zh_upload_free_note = /** @type {(inputs: Upload_Free_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任何文件类型均可。文件只进行安全检查（不需要 RedLoader 清单）。版本号在“发布”步骤中填写。`)
};

const ja_upload_free_note = /** @type {(inputs: Upload_Free_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`どの形式のファイルでも構いません。セキュリティチェックのみ行います（RedLoaderのマニフェストは不要）。バージョン番号は「公開」ステップで入力します。`)
};

/**
* | output |
* | --- |
* | "Any file type. The file gets the security checks only (no RedLoader manifest needed). You type the version number in the Release step." |
*
* @param {Upload_Free_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_free_note = /** @type {((inputs?: Upload_Free_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Free_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_free_note(inputs)
	if (locale === "de") return de_upload_free_note(inputs)
	if (locale === "fr") return fr_upload_free_note(inputs)
	if (locale === "it") return it_upload_free_note(inputs)
	if (locale === "nl") return nl_upload_free_note(inputs)
	if (locale === "pl") return pl_upload_free_note(inputs)
	if (locale === "pt") return pt_upload_free_note(inputs)
	if (locale === "ru") return ru_upload_free_note(inputs)
	if (locale === "sv") return sv_upload_free_note(inputs)
	if (locale === "tr") return tr_upload_free_note(inputs)
	if (locale === "zh") return zh_upload_free_note(inputs)
	if (locale === "ja") return ja_upload_free_note(inputs)
	return en_upload_free_note(inputs)
});
