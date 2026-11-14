/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_SmartscreenInputs */

const en_manager_smartscreen = /** @type {(inputs: Manager_SmartscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows SmartScreen may warn you the first time because the exe is not signed: click More info, then Run anyway. The source code is public on GitHub.`)
};

const es_manager_smartscreen = /** @type {(inputs: Manager_SmartscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows SmartScreen puede avisarte la primera vez porque el exe no está firmado: haz clic en Más información y luego en Ejecutar de todas formas. El código fuente es público en GitHub.`)
};

const de_manager_smartscreen = /** @type {(inputs: Manager_SmartscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows SmartScreen warnt beim ersten Start eventuell, weil die exe nicht signiert ist: Klicke auf Weitere Informationen und dann auf Trotzdem ausführen. Der Quellcode ist öffentlich auf GitHub.`)
};

const fr_manager_smartscreen = /** @type {(inputs: Manager_SmartscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows SmartScreen peut vous avertir la première fois car l’exe n’est pas signé : cliquez sur Informations complémentaires, puis sur Exécuter quand même. Le code source est public sur GitHub.`)
};

const it_manager_smartscreen = /** @type {(inputs: Manager_SmartscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows SmartScreen potrebbe avvisarti la prima volta perché l’exe non è firmato: clicca Ulteriori informazioni, poi Esegui comunque. Il codice sorgente è pubblico su GitHub.`)
};

const nl_manager_smartscreen = /** @type {(inputs: Manager_SmartscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows SmartScreen kan de eerste keer waarschuwen omdat de exe niet ondertekend is: klik op Meer informatie en dan op Toch uitvoeren. De broncode staat openbaar op GitHub.`)
};

const pl_manager_smartscreen = /** @type {(inputs: Manager_SmartscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows SmartScreen może za pierwszym razem ostrzec, bo exe nie jest podpisany: kliknij Więcej informacji, a potem Uruchom mimo to. Kod źródłowy jest publiczny na GitHubie.`)
};

const pt_manager_smartscreen = /** @type {(inputs: Manager_SmartscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O Windows SmartScreen pode avisar na primeira vez porque o exe não é assinado: clique em Mais informações e depois em Executar assim mesmo. O código-fonte é público no GitHub.`)
};

const ru_manager_smartscreen = /** @type {(inputs: Manager_SmartscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows SmartScreen может предупредить при первом запуске, потому что exe не подписан: нажмите «Подробнее», затем «Выполнить в любом случае». Исходный код открыт на GitHub.`)
};

const sv_manager_smartscreen = /** @type {(inputs: Manager_SmartscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows SmartScreen kan varna första gången eftersom exe-filen inte är signerad: klicka på Mer information och sedan Kör ändå. Källkoden är öppen på GitHub.`)
};

const tr_manager_smartscreen = /** @type {(inputs: Manager_SmartscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exe imzalı olmadığı için Windows SmartScreen ilk seferde uyarabilir: Ek bilgi'ye, ardından Yine de çalıştır'a tıkla. Kaynak kodu GitHub'da herkese açık.`)
};

const zh_manager_smartscreen = /** @type {(inputs: Manager_SmartscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`由于 exe 未签名，Windows SmartScreen 首次运行时可能会提示：点击“更多信息”，再点击“仍要运行”。源代码在 GitHub 上公开。`)
};

const ja_manager_smartscreen = /** @type {(inputs: Manager_SmartscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`exe に署名がないため、初回は Windows SmartScreen が警告することがあります。「詳細情報」→「実行」をクリックしてください。ソースコードは GitHub で公開されています。`)
};

/**
* | output |
* | --- |
* | "Windows SmartScreen may warn you the first time because the exe is not signed: click More info, then Run anyway. The source code is public on GitHub." |
*
* @param {Manager_SmartscreenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_smartscreen = /** @type {((inputs?: Manager_SmartscreenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_SmartscreenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_smartscreen(inputs)
	if (locale === "de") return de_manager_smartscreen(inputs)
	if (locale === "fr") return fr_manager_smartscreen(inputs)
	if (locale === "it") return it_manager_smartscreen(inputs)
	if (locale === "nl") return nl_manager_smartscreen(inputs)
	if (locale === "pl") return pl_manager_smartscreen(inputs)
	if (locale === "pt") return pt_manager_smartscreen(inputs)
	if (locale === "ru") return ru_manager_smartscreen(inputs)
	if (locale === "sv") return sv_manager_smartscreen(inputs)
	if (locale === "tr") return tr_manager_smartscreen(inputs)
	if (locale === "zh") return zh_manager_smartscreen(inputs)
	if (locale === "ja") return ja_manager_smartscreen(inputs)
	return en_manager_smartscreen(inputs)
});
