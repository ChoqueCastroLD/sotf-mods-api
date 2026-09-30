/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_LeadInputs */

const en_content_brand_lead = /** @type {(inputs: Content_Brand_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linking to SOTF Mods from your mod page, video or server? Use these files and keep the rules below.`)
};

const es_content_brand_lead = /** @type {(inputs: Content_Brand_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Enlazas SOTF Mods desde la página de tu mod, un vídeo o tu servidor? Usa estos archivos y respeta las reglas de abajo.`)
};

const de_content_brand_lead = /** @type {(inputs: Content_Brand_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du verlinkst SOTF Mods auf deiner Mod-Seite, in einem Video oder auf deinem Server? Nutze diese Dateien und halte dich an die Regeln unten.`)
};

const fr_content_brand_lead = /** @type {(inputs: Content_Brand_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous faites un lien vers SOTF Mods depuis la page de votre mod, une vidéo ou votre serveur ? Utilisez ces fichiers et respectez les règles ci-dessous.`)
};

const it_content_brand_lead = /** @type {(inputs: Content_Brand_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Metti un link a SOTF Mods nella pagina della tua mod, in un video o sul tuo server? Usa questi file e rispetta le regole qui sotto.`)
};

const nl_content_brand_lead = /** @type {(inputs: Content_Brand_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link je naar SOTF Mods vanaf je modpagina, een video of je server? Gebruik deze bestanden en houd je aan de regels hieronder.`)
};

const pl_content_brand_lead = /** @type {(inputs: Content_Brand_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linkujesz do SOTF Mods ze strony moda, filmu lub serwera? Użyj tych plików i trzymaj się poniższych zasad.`)
};

const pt_content_brand_lead = /** @type {(inputs: Content_Brand_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai colocar um link para o SOTF Mods na página do seu mod, em um vídeo ou no seu servidor? Use estes arquivos e siga as regras abaixo.`)
};

const ru_content_brand_lead = /** @type {(inputs: Content_Brand_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ставите ссылку на SOTF Mods на странице мода, в видео или на сервере? Используйте эти файлы и соблюдайте правила ниже.`)
};

const sv_content_brand_lead = /** @type {(inputs: Content_Brand_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länkar du till SOTF Mods från din moddsida, en video eller din server? Använd de här filerna och följ reglerna nedan.`)
};

const tr_content_brand_lead = /** @type {(inputs: Content_Brand_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod sayfandan, bir videodan veya sunucundan SOTF Mods’a bağlantı mı veriyorsun? Bu dosyaları kullan ve aşağıdaki kurallara uy.`)
};

const zh_content_brand_lead = /** @type {(inputs: Content_Brand_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要在模组页面、视频或服务器中链接 SOTF Mods？请使用这些文件并遵守下面的规则。`)
};

const ja_content_brand_lead = /** @type {(inputs: Content_Brand_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD のページや動画、サーバーから SOTF Mods にリンクしますか？これらのファイルを使い、下のルールを守ってください。`)
};

/**
* | output |
* | --- |
* | "Linking to SOTF Mods from your mod page, video or server? Use these files and keep the rules below." |
*
* @param {Content_Brand_LeadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_lead = /** @type {((inputs?: Content_Brand_LeadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_LeadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_lead(inputs)
	if (locale === "de") return de_content_brand_lead(inputs)
	if (locale === "fr") return fr_content_brand_lead(inputs)
	if (locale === "it") return it_content_brand_lead(inputs)
	if (locale === "nl") return nl_content_brand_lead(inputs)
	if (locale === "pl") return pl_content_brand_lead(inputs)
	if (locale === "pt") return pt_content_brand_lead(inputs)
	if (locale === "ru") return ru_content_brand_lead(inputs)
	if (locale === "sv") return sv_content_brand_lead(inputs)
	if (locale === "tr") return tr_content_brand_lead(inputs)
	if (locale === "zh") return zh_content_brand_lead(inputs)
	if (locale === "ja") return ja_content_brand_lead(inputs)
	return en_content_brand_lead(inputs)
});
